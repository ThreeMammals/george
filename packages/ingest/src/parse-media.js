const url = require('url');

// eslint-disable-next-line no-extend-native
String.prototype.replaceAll = function (search, replacement) {
  const target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

const parseMedia = async (saveMedia, postContent) => {
  let content = postContent;

  // extract all the media urls from post content ready to format
  // from https://en.support.wordpress.com/audio/ & https://en.support.wordpress.com/accepted-filetypes/
  const medias = postContent.match(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg|mp3|m4a|ogg|wav|zip|pdf|docx|doc|pptx|ppt|ppsx|pps|odt|xlsx|xls|key|mp4|m4v|mov|wmv|avi|mpg|ogv|3gp|3g2))/ig);
  const promises = [];

  if (medias) {
  // eslint-disable-next-line no-plusplus
    for (let i = 0; i < medias.length; i++) {
      const media = medias[i];

      // we run wordpress on /admin so when we ingest an image it will be on something like https://serve/admin/wp-content/uploads/.*/ we need to remvove /admin bit
      const formattedForApiUrl = media.replace(
        `${process.env.WORDPRESS_SITE_ROOT}admin/`,
        process.env.GEORGE_SITE_ROOT,
      );

      // replace the image in content with the image formatted for
      // saving
      content = content.replaceAll(media, formattedForApiUrl);

      // extract the destination path to save the image on
      // should be something like /wp-content/uploads/.*
      const uri = url.parse(formattedForApiUrl);
      const destination = decodeURI(uri.pathname);

      promises.push(saveMedia(media, destination));
    }
  }

  await Promise.all(promises);

  return content;
};

module.exports.parseMedia = parseMedia;
