

const { postUpdated, stickyPostOptionUpdated, postTrashed } = require('../src/event-handlers');

describe('postUpdated', () => {
  let pool;
  let wordpressPostUpdated;
  const saveMedia = () => {};

  beforeEach(() => {
    wordpressPostUpdated = {
      Message: {
        ID: 1,
        post_date: '2019-03-19 08:16:26',
        post_modified: '2019-03-19 08:16:26',
        post_title: 'George is the best..',
        post_name: 'george-is-the-best',
        post_content: '<!-- wp:columns {"columns":3} -->\n<div class="wp-block-columns has-3-columns"><!-- wp:column -->\n<div class="wp-block-column"><!-- wp:paragraph -->\n<p>Left</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class="wp-block-column"><!-- wp:paragraph -->\n<p>Middle</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class="wp-block-column"><!-- wp:paragraph -->\n<p>Right</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns -->',
      },
    };
  });

  it('should write to db ', async () => {
    pool = {
      query: jest.fn(() => ({
        rows: [],
      })),
    };

    await postUpdated(saveMedia, pool)(wordpressPostUpdated);
    expect(pool.query).toHaveBeenCalledTimes(2);

    expect(pool.query.mock.calls[0][0]).toBe(
      'SELECT * FROM posts WHERE external_id = $1',
    );
    expect(pool.query.mock.calls[1][0]).toBe(
      'INSERT INTO posts(external_id, title, tree, url_path, post_date, post_modified, meta_title, meta_description) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    );
  });

  it('should update to db ', async () => {
    pool = {
      query: jest.fn(() => ({
        rows: [1],
      })),
    };
    await postUpdated(saveMedia, pool)(wordpressPostUpdated);
    expect(pool.query).toHaveBeenCalledTimes(2);

    expect(pool.query.mock.calls[0][0]).toBe(
      'SELECT * FROM posts WHERE external_id = $1',
    );
    expect(pool.query.mock.calls[1][0]).toBe(
      'UPDATE posts SET title = $2, tree = $3, url_path = $4, post_modified = $5, meta_title = $6, meta_description = $7 WHERE external_id = $1 RETURNING *',
    );
  });
});

describe('postTrashed', () => {
  let pool;
  let wordpressPostTrashed;

  beforeEach(() => {
    wordpressPostTrashed = {
      Message: {
        ID: 1,
      },
    };
  });

  it('should write to db', async () => {
    pool = {
      query: jest.fn(),
    };

    await postTrashed(pool)(wordpressPostTrashed);

    expect(pool.query).toHaveBeenCalledTimes(1);
    expect(pool.query.mock.calls[0][0]).toBe(
      'UPDATE posts SET trashed = true WHERE external_id = $1',
    );
  });
});


describe('stickyPostOptionUpdated', () => {
  let pool;
  let wordpressOptionUpdated;

  beforeEach(() => {
    pool = {
      query: jest.fn(),
    };
  });

  it('should insert', async () => {
    wordpressOptionUpdated = {
      Type: 'OptionUpdated', TopicArn: '/var/www/html/events/OptionUpdated', Message: { option_name: 'sticky_posts', old_value: [69], value: [69, 71] }, MessageAttributes: { causationId: { DataType: 'String', StringValue: '0' }, messageId: { DataType: 'String', StringValue: '2b8766b8-66c3-11e9-bbbf-0242ac120007' }, correlationId: { DataType: 'String', StringValue: '2b876a5a-66c3-11e9-87af-0242ac120007' } }, Subject: 'Pushy',
    };

    await stickyPostOptionUpdated(pool)(wordpressOptionUpdated);

    expect(pool.query).toHaveBeenCalledTimes(1);
    expect(pool.query.mock.calls[0][0]).toBe(
      'INSERT INTO sticky_posts(external_id) VALUES($1) RETURNING *',
    );
  });

  it('should delete', async () => {
    wordpressOptionUpdated = {
      Type: 'OptionUpdated', TopicArn: '/var/www/html/events/OptionUpdated', Message: { option_name: 'sticky_posts', old_value: [69, 71], value: [69] }, MessageAttributes: { causationId: { DataType: 'String', StringValue: '0' }, messageId: { DataType: 'String', StringValue: '2b8766b8-66c3-11e9-bbbf-0242ac120007' }, correlationId: { DataType: 'String', StringValue: '2b876a5a-66c3-11e9-87af-0242ac120007' } }, Subject: 'Pushy',
    };

    await stickyPostOptionUpdated(pool)(wordpressOptionUpdated);

    expect(pool.query).toHaveBeenCalledTimes(1);
    expect(pool.query.mock.calls[0][0]).toBe(
      'DELETE FROM sticky_posts WHERE external_id in (71)',
    );
  });

  it('should insert and delete', async () => {
    wordpressOptionUpdated = {
      Type: 'OptionUpdated', TopicArn: '/var/www/html/events/OptionUpdated', Message: { option_name: 'sticky_posts', old_value: [69, 71], value: [69, 1] }, MessageAttributes: { causationId: { DataType: 'String', StringValue: '0' }, messageId: { DataType: 'String', StringValue: '2b8766b8-66c3-11e9-bbbf-0242ac120007' }, correlationId: { DataType: 'String', StringValue: '2b876a5a-66c3-11e9-87af-0242ac120007' } }, Subject: 'Pushy',
    };

    await stickyPostOptionUpdated(pool)(wordpressOptionUpdated);
    expect(pool.query).toHaveBeenCalledTimes(2);

    expect(pool.query.mock.calls[0][0]).toBe(
      'DELETE FROM sticky_posts WHERE external_id in (71)',
    );
    expect(pool.query.mock.calls[1][0]).toBe(
      'INSERT INTO sticky_posts(external_id) VALUES($1) RETURNING *',
    );
  });
});
