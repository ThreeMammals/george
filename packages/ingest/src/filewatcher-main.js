/* eslint-disable no-console */
const chokidar = require('chokidar');
const { Pool } = require('pg');
const { eventHandler } = require('./event-handler');
const { publish } = require('./file-event-publisher');
const { extractType, loadEvent } = require('./filewatcher-utils');
const { saveMedia } = require('./save-media');

const pool = new Pool({
  host: 'postgres',
  user: 'george',
  password: 'example',
  ssl: false,
  database: 'george',
});

console.log('starting filewatcher');

chokidar
  .watch('./events/', {
    ignoreInitial: true,
  })
  .on('add', async (path) => {
    console.log('handling', path);
    await eventHandler(extractType(path), loadEvent(path), saveMedia, pool, publish);
  });
