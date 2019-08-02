const fs = require('fs');

const publish = async (event, type) => new Promise((resolve, reject) => {
  fs.writeFile(`./publish/${type}-${event.MessageAttributes.messageId.StringValue}.json`, JSON.stringify(event), (err) => {
    if (err) {
      console.log(err);
      return reject(err);
    }

    console.log('The file was saved!');
    return resolve(event);
  });
});

module.exports.publish = publish;
