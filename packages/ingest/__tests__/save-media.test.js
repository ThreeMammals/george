const fs = require('fs');
const path = require('path');
const express = require('express');
const { saveMedia } = require('../src/save-media');

let app;
let server;
const pathThatDoesExist = './__tests__/test-data/image_tests/test-image.png';
const pathThatDoesntExist = './__tests__/test-data/a/b/c/test-image.png';

beforeAll(() => {
  app = express();

  const dir = path.join(__dirname, 'test-data');

  app.use(express.static(dir));

  server = app.listen(3123, () => {
    console.log('Listening on http://localhost:3123/');
  });
});

afterAll((done) => {
  server.close(() => {
    done();
  });
  fs.unlinkSync(pathThatDoesExist);
  fs.unlinkSync(pathThatDoesntExist);
});

describe('saveMedia', () => {
  it('should save image', async () => {
    const expected = fs.readFileSync('./__tests__/test-data/test-image.png');
    const src = 'http://localhost:3123/test-image.png';

    await saveMedia(src, pathThatDoesExist);

    const downloaded = fs.readFileSync(pathThatDoesExist);
    expect(expected).toEqual(downloaded);
  });

  it('should save image to folder that doesnt exist', async () => {
    const expected = fs.readFileSync('./__tests__/test-data/test-image.png');
    const src = 'http://localhost:3123/test-image.png';

    await saveMedia(src, pathThatDoesntExist);

    const downloaded = fs.readFileSync(pathThatDoesntExist);
    expect(expected).toEqual(downloaded);
  });
});
