const download = require('image-downloader');
const fs = require('fs');
const path = require('path');

const saveMedia = async (url, dest) => new Promise((resolve, reject) => {
  const onlyPath = path.dirname(dest);
  const root = process.cwd();

  // this hack assumes we are running inside docker compose and are getting out to wordpress
  // to download this image which can't get outside to the host networking
  console.log(url);
  console.log(process.env.WORDPRESS_SITE_ROOT);

  const hackedUrl = url.replace(
    process.env.WORDPRESS_SITE_ROOT,
    process.env.INTERNAL_SITE_ROOL,
  );

  const fullPath = path.join(root, onlyPath);

  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }

  const options = {
    url: hackedUrl,
    dest: path.join(root, dest),
  };

  console.log('saving image..');
  console.log(options);

  // hack for local environment, todo - switch to turn this off? probably
  // just pass this in via docker-compose
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

  download
    .image(options)
    .then(({ filename, image }) => {
      console.log('File saved to', filename);
      resolve();
    })
    .catch((err) => {
      console.error(err);
      reject(err);
    });
});

module.exports.saveMedia = saveMedia;
