

const { extractType, loadEvent } = require('../src/filewatcher-utils');

describe('utils', () => {
  it('should extract extractEventType', () => {
    const eventType = extractType(
      '/var/test/someplace/PostMetaUpdated-b701fc5e-48f9-11e9-841e-0242ac140005.json',
    )();
    expect(eventType).toBe('PostMetaUpdated');
  });

  it('should load event', () => {
    const event = loadEvent('./__tests__/test-data/PostUpdated-someguid.json')();
    expect(event.Message.ID).toBe(34);
  });
});
