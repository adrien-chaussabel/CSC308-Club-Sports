// Test server, to be used in testing the backend routes.

const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/users');

const app = express();
const currentPort = 3011 || process.ENV.port;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/users', userRoute);

app.listen(currentPort, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on Port ${currentPort}`);
});
