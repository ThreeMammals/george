const { postUpdated, stickyPostOptionUpdated, postTrashed } = require('./event-handlers');

const getHandler = (saveMedia, pool, eventType) => {
  if (eventType === 'PostUpdated') {
    return postUpdated(saveMedia, pool);
  }

  if (eventType === 'PostTrashed') {
    return postTrashed(pool);
  }

  if (eventType === 'StickyPostsOptionUpdated') {
    return stickyPostOptionUpdated(pool);
  }
  return undefined;
};

const eventHandler = async (extractType, loadEvent, saveMedia, pool, publish) => {
  const type = extractType();
  const event = loadEvent();
  const handler = getHandler(saveMedia, pool, type);
  if (handler === undefined) {
    return undefined;
  }
  const handled = await handler(event);
  await publish(event, type);
  return handled;
};

module.exports.eventHandler = eventHandler;
module.exports.getHandler = getHandler;
