const fs = require('fs');
const convert = require('xml-js');

const copy = (sourcePath, targetPath) => {
  fs.copyFileSync(sourcePath, targetPath);
  return targetPath;
};

const merge = async (fullPath, incrementalPath) => {
  const fullContents = fs
    .readFileSync(fullPath, 'utf8')
    .replace('</xml>', '')
    .trimEnd();
  const incrementalContent = fs
    .readFileSync(incrementalPath, 'utf8')
    .replace('</xml>', '')
    .trimEnd();

  const fullJson = convert.xml2js(fullContents, {
    ignoreComment: true,
    alwaysChildren: true,
  });
  const incrementalJson = convert.xml2js(incrementalContent, {
    ignoreComment: true,
    alwaysChildren: true,
  });

  // get all the urls in out sitemap...does this scale? :(
  const urls = fullJson.elements[0].elements.map((e) => {
    const url = e.elements[0].elements[0].text;
    return url;
  });

  // modify full json to include new urls from incremental sitemap
  incrementalJson.elements[0].elements.forEach((e) => {
    const url = e.elements[0].elements[0].text;
    // if full json doesnt contain this url then append the e to it
    if (!urls.includes(url)) {
      fullJson.elements[0].elements.push(e);
    }
  });

  // convert js back to xml
  const xml = convert.js2xml(fullJson, {
    spaces: 4,
  });

  console.log('-----------------------------------------------');
  console.log(`Writing sitemap to ${incrementalPath}`);
  console.log(xml);
  console.log('-----------------------------------------------');

  // write sitemap to dist
  fs.writeFileSync(incrementalPath, xml);
};

module.exports.copy = copy;
module.exports.merge = merge;
