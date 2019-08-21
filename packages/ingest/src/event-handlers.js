const { postContentToBlocks } = require('./post-content-to-blocks');
const { blocksToReactTree } = require('./blocks-to-react-tree');
const { parseMedia } = require('./parse-media');
const { parseMeta } = require('./parse-meta');

const handleSymbols = (name, value) => {
  if (typeof value === 'symbol') {
    return `${Symbol.keyFor(value)}`;
  }
  return value;
};

const postTrashed = pool => async (event) => {
  const dto = {
    postId: event.Message.ID,
  };

  // select
  const updateSql = 'UPDATE posts SET trashed = true WHERE external_id = $1';
  const updateValues = [dto.postId];
  const res = await pool.query(updateSql, updateValues);
  return res;
};

const postUpdated = (saveMedia, pool) => async (event) => {
  const postContent = await parseMedia(saveMedia, event.Message.post_content);
  const blocks = postContentToBlocks(postContent);
  const reactTree = blocksToReactTree(blocks);
  const meta = parseMeta(event.Message);

  const dto = {
    postId: event.Message.ID,
    title: event.Message.post_title,
    // wordpress wants you to use post_name as the slug...maybe rename url_path to slug
    url_path: event.Message.post_name,
    tree: JSON.stringify(reactTree, handleSymbols),
    post_date: event.Message.post_date,
    post_modified: event.Message.post_modified,
    meta_title: meta.title,
    meta_description: meta.description,
  };

  // select
  const selectSql = 'SELECT * FROM posts WHERE external_id = $1';
  const selectValues = [dto.postId];
  const exists = await pool.query(selectSql, selectValues);

  if (exists.rows.length > 0) {
    // update
    const updateSql = 'UPDATE posts SET title = $2, tree = $3, url_path = $4, post_modified = $5, meta_title = $6, meta_description = $7 WHERE external_id = $1 RETURNING *';
    const updateValues = [dto.postId, dto.title, dto.tree, dto.url_path, dto.post_modified, dto.meta_title, dto.meta_description];
    const res = await pool.query(updateSql, updateValues);
    return res;
  }
  // insert
  const insertSql = 'INSERT INTO posts(external_id, title, tree, url_path, post_date, post_modified, meta_title, meta_description) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
  // eslint-disable-next-line max-len
  const insertValues = [dto.postId, dto.title, dto.tree, dto.url_path, dto.post_date, dto.post_modified, dto.meta_title, dto.meta_description];
  const res = await pool.query(insertSql, insertValues);
  return res;
};

const stickyPostOptionUpdated = pool => async (event) => {
  const oldValue = event.Message.old_value;
  const { value } = event.Message;

  const dto = {
    insert: value.filter(el => !oldValue.includes(el)),
    delete: oldValue.filter(el => !value.includes(el)),
  };

  if (dto.delete.length > 0) {
    const deleteSql = `DELETE FROM sticky_posts WHERE external_id in (${dto.delete.join(',')})`;
    await pool.query(deleteSql);
  }

  return dto.insert.map(async (i) => {
    const insertSql = 'INSERT INTO sticky_posts(external_id) VALUES($1) RETURNING *';
    const insertValues = [i];
    const res = await pool.query(insertSql, insertValues);
    return res;
  });
};

module.exports.postUpdated = postUpdated;
module.exports.stickyPostOptionUpdated = stickyPostOptionUpdated;
module.exports.postTrashed = postTrashed;
