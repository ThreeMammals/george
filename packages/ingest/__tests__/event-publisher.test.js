const fs = require('fs');
const { publish } = require('../src/file-event-publisher');

describe('publish', () => {
  it('should publish', async () => {
    const event = {
      test: 1,
      MessageAttributes: {
        messageId: {
          StringValue: '12312312',
        },
      },
    };

    const result = await publish(event, 'test');
    expect(result).toEqual(event);
    fs.unlinkSync(`./publish/test-${event.MessageAttributes.messageId.StringValue}.json`);
  });
});
