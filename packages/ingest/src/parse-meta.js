const parseMeta = (postUpdated) => {
  // eslint-disable-next-line no-underscore-dangle
  const title = (postUpdated.post_meta._yoast_wpseo_title !== undefined && postUpdated.post_meta._yoast_wpseo_title.length > 0 && postUpdated.post_meta._yoast_wpseo_title[0] !== null && postUpdated.post_meta._yoast_wpseo_title[0] !== undefined && postUpdated.post_meta._yoast_wpseo_title[0] !== '') ? postUpdated.post_meta._yoast_wpseo_title[0] : postUpdated.post_title;

  // eslint-disable-next-line no-underscore-dangle
  const description = (postUpdated.post_meta._yoast_wpseo_metadesc !== undefined && postUpdated.post_meta._yoast_wpseo_metadesc.length > 0 && postUpdated.post_meta._yoast_wpseo_metadesc[0] !== null && postUpdated.post_meta._yoast_wpseo_metadesc[0] !== undefined && postUpdated.post_meta._yoast_wpseo_metadesc[0] !== '') ? postUpdated.post_meta._yoast_wpseo_metadesc[0] : '';

  return {
    title,
    description,
  };
};

module.exports.parseMeta = parseMeta;
