const amqp = require('amqplib');

const publish = async (event, type) => amqp
  .connect(process.env.GEORGE_RABBITMQ_URL)
  .then(conn => conn
    .createChannel()
    .then((ch) => {
      const q = type;
      const msg = JSON.stringify(event);
      const ok = ch.assertQueue(q, { durable: true });

      return ok.then(() => {
        ch.sendToQueue(q, Buffer.from(msg));
        console.log(" [x] Sent '%s'", msg);
        return ch.close();
      });
    })
    .finally(() => {
      conn.close();
    }))
  .catch(console.warn);

module.exports.publish = publish;
