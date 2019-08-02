const {
  execFile,
} = require('child_process');
// change the siteRoot at your peril, notice the default on the end. Spent ages messing around
// with this.
const {
  siteRoot,
} = require('../../static.config').default;
const {
  merge,
  copy: copySitemap,
} = require('./merge-sitemaps');
const {
  events,
} = require('./events');

const incrementalBuild = (id) => {
  console.log(siteRoot);
  // hack cos for some reason doesnt read the siteconfig when doing export build?
  const env = Object.assign({}, process.env, {
    REACT_STATIC_PUBLIC_PATH: siteRoot,
  });

  return new Promise((resolve, reject) => {
    const child = execFile(
      'npm',
      ['run', 'incremental-build', id], {
        env,
      },
      (error, stdout, stderr) => {
        if (error) {
          console.log(error);
          console.log(stderr);
          console.log(stdout);
          console.log('error in incremental build');
          reject(error);
        } else {
          console.log(stdout);
          resolve(stdout);
        }
      },
    );
  });
};

const build = () => new Promise((resolve, reject) => {
  const child = execFile(
    'npm',
    ['run', 'full-build'],
    (error, stdout, stderr) => {
      if (error) {
        console.log(error);
        console.log(stderr);
        console.log('error in build');
        reject(error);
      } else {
        console.log(stdout);
        resolve(stdout);
      }
    },
  );
});

const copy = () => new Promise((resolve, reject) => {
  const child = execFile(
    'cp',
    ['-r', './dist/.', './website/'],
    (error, stdout, stderr) => {
      if (error) {
        console.log(error);
        console.log(stderr);
        console.log('error in copy');
        reject(error);
      } else {
        console.log(stdout);
        resolve(stdout);
      }
    },
  );
});

const handle = async (ch, msg) => {
  const content = msg.content.toString();
  const message = JSON.parse(content);
  if (events.includes(message.Type)) {
    const id = message.Message.ID;
    // dont put the copy in dist as this is rm -rf by react static
    const fullBuildSitemapPath = './dist/sitemap.xml';
    const fullBuildCopySitemapPath = './sitemap-copy.xml';

    // copy the sitemap
    copySitemap(fullBuildSitemapPath, fullBuildCopySitemapPath);
    // do the build
    await incrementalBuild(id);
    // merge the full copied sitemap with the incremental
    await merge(fullBuildCopySitemapPath, fullBuildSitemapPath);

    console.log(`incremental build for ${id}`);
  } else {
    console.log('building entire site');
    await build();
  }

  console.log('copying files to website');
  await copy();
  console.log('handled message', content);
  ch.ack(msg);
};

module.exports.handle = handle;
