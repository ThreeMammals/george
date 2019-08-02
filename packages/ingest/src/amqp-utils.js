const extractType = message => () => {
  const test = JSON.parse(message);
  const type = test.Type;
  if (type === 'OptionUpdated') {
    if (test.Message.option_name === 'sticky_posts') {
      return 'StickyPostsOptionUpdated';
    }
  }

  return type;
};

const loadEvent = message => () => JSON.parse(message);

module.exports.extractType = extractType;
module.exports.loadEvent = loadEvent;
