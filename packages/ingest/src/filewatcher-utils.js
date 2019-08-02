const path = require('path');
const fs = require('fs');

const extractType = fullPath => () => {
  if (typeof fullPath === 'string' || fullPath instanceof String) {
    const event = path.basename(fullPath);
    return event.match(/[^-]*/)[0];
  }
  return undefined;
};

const loadEvent = fullPath => () => {
  const contents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(contents);
};

module.exports.extractType = extractType;
module.exports.loadEvent = loadEvent;
