const { eventHandler, getHandler } = require('../src/event-handler');
const postUpdated = require('./test-data/PostUpdated-someguid.json');

describe('getHandler', () => {
  it('should get PostUpdated handler', () => {
    const handler = getHandler({}, {}, 'PostUpdated');
    expect(handler).toBeInstanceOf(Function);
  });

  it('should get PostTrashed handler', () => {
    const handler = getHandler({}, {}, 'PostTrashed');
    expect(handler).toBeInstanceOf(Function);
  });

  it('should get StickyPostsOptionUpdated handler', () => {
    const handler = getHandler({}, {}, 'StickyPostsOptionUpdated');
    expect(handler).toBeInstanceOf(Function);
  });

  it('should get undefined handler', () => {
    const handler = getHandler('PostMetaUpdated');
    expect(handler).toBeUndefined();
  });
});

describe('eventHandler', () => {
  it('should handle event', async () => {
    const pool = {
      query: jest.fn(() => ({
        rows: [
          {
            external_id: 1,
          },
        ],
      })),
    };

    const saveMedia = jest.fn();
    const publish = jest.fn();
    const extractType = jest.fn(() => 'PostUpdated');
    const loadEvent = jest.fn(() => postUpdated);

    const result = await eventHandler(
      extractType,
      loadEvent,
      saveMedia,
      pool,
      publish,
    );

    expect(result.rows[0].external_id).toBe(1);
    expect(publish).toBeCalledTimes(1);
  });
});
