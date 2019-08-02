const ampq = require('amqplib/callback_api');

const {
  events,
} = require('./utils/events');

const {
  handle,
} = require('./utils/event-handler');


const logError = (err) => {
  console.error(err);
};

const onOpen = (err, ch) => {
  if (err != null) {
    logError(err);
  }
  // only consume 1 message at at time so building the site works..
  ch.prefetch(1);

  // make sure queues exist and subscribe them to the handler
  events.forEach((e) => {
    console.log(`subscribing to ${e}`);
    ch.assertQueue(e);
    ch.consume(e, async (msg) => {
      // this null check was copied from lib example
      if (msg !== null) {
        await handle(ch, msg);
      }
    });
  });
};

console.log('starting ampq subscriber');
console.log(process.env.GEORGE_PUBLIC_API_URL);

ampq.connect(process.env.GEORGE_RABBITMQ_URL, (err, conn) => {
  if (err != null) {
    logError(err);
  }
  conn.createChannel(onOpen);
});
