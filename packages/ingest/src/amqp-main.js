const { Pool } = require('pg');
const ampq = require('amqplib/callback_api');
const { eventHandler } = require('./event-handler');
const { publish } = require('./amqp-event-publisher');
const { extractType, loadEvent } = require('./amqp-utils');
const { saveMedia } = require('./save-media');

const pool = new Pool({
  host: process.env.GEORGE_DATABASE_HOST,
  user: 'george',
  password: 'example',
  ssl: false,
  database: 'george',
});

const queueName = 'msgs';

const logError = (err) => {
  console.error(err);
};

const onOpen = (err, ch) => {
  if (err != null) {
    logError(err);
  }
  ch.assertQueue(queueName);
  ch.consume(queueName, async (msg) => {
    if (msg !== null) {
      const content = msg.content.toString();
      await eventHandler(
        extractType(content),
        loadEvent(content),
        saveMedia,
        pool,
        publish,
      );
      console.log('handled message', content);
      ch.ack(msg);
    }
  });
};

console.log('starting ampq subscriber');

ampq.connect(process.env.GEORGE_RABBITMQ_URL, (err, conn) => {
  if (err != null) {
    logError(err);
  }
  conn.createChannel(onOpen);
});
