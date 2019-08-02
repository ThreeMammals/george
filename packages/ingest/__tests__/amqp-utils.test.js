const { extractType, loadEvent } = require('../src/amqp-utils');

const postUpdated = '{"Type":"PostUpdated","TopicArn":"/var/www/html/events/PostUpdated","Message":{"ID":1,"post_author":"1","post_date":"2019-04-12 21:53:53","post_date_gmt":"2019-04-12 21:53:53","post_content":"<!-- wp:paragraph --><p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing! Test.</p><!-- /wp:paragraph -->","post_title":"Hello world!","post_excerpt":"","post_status":"publish","comment_status":"open","ping_status":"open","post_password":"","post_name":"hello-world","to_ping":"","pinged":"","post_modified":"2019-04-13 15:40:04","post_modified_gmt":"2019-04-13 15:40:04","post_content_filtered":"","post_parent":0,"guid":"http://localhost:8000/?p=1","menu_order":0,"post_type":"post","post_mime_type":"","comment_count":"1","filter":"raw","post_meta":{"_edit_lock":["1555169999:1"],"_encloseme":["1","1","1","1","1","1","1","1"]}},"MessageAttributes":{"causationId":{"DataType":"String","StringValue":"0"},"messageId":{"DataType":"String","StringValue":"688e186e-5e02-11e9-9d11-0242ac14000a"},"correlationId":{"DataType":"String","StringValue":"688e451e-5e02-11e9-a620-0242ac14000a"}},"Subject":"Pushy"}';

const optionUpdated = '{"Type":"OptionUpdated","TopicArn":"/var/www/html/events/OptionUpdated","Message":{"option_name":"sticky_posts","old_value":[69],"value":[69,71]},"MessageAttributes":{"causationId":{"DataType":"String","StringValue":"0"},"messageId":{"DataType":"String","StringValue":"2b8766b8-66c3-11e9-bbbf-0242ac120007"},"correlationId":{"DataType":"String","StringValue":"2b876a5a-66c3-11e9-87af-0242ac120007"}},"Subject":"Pushy"}';

describe('utils', () => {
  it('should extract PostUpdated', () => {
    const eventType = extractType(postUpdated)();
    expect(eventType).toBe('PostUpdated');
  });

  it('should extract StickyPostsOptionUpdated', () => {
    const eventType = extractType(optionUpdated)();
    expect(eventType).toBe('StickyPostsOptionUpdated');
  });

  it('should load event', () => {
    const event = loadEvent(postUpdated)();
    expect(event.Message.ID).toBe(1);
  });
});
