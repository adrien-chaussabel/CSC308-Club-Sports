require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const userRoute = require('./routes/users');
const teamRoute = require('./routes/teams');
const eventRoute = require('./routes/events');
const con = require('./databaseCon');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/users', userRoute);
app.use('/teams', teamRoute);
app.use('/events', eventRoute);

const selectAllUsers = 'SELECT * FROM users';


app.use(express.static(path.join(__dirname, 'my-app/build')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'my-app/build', 'index.html'));
});

app.get('/basic', (req, res) => {
  res.sendStatus(200);
});

/* connection with Google server */


/*
const con = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

con.connect((err) => {
  if (err) {
    return err;
  }
  return 'connected';
});
*/

app.use(cors());
/*
app.get('/', (req, res) => {
  res.send('hello from the server');
});
*/

/* shows all users in users table */
app.get('/users', (req, res) => {
  con.query(selectAllUsers, (err, results) => {
    if (err) {
      return res.send(err);
    }
    return res.json({
      data: results,
    });
  });
});

/* adds user to users table */
app.get('/users/add', (req, res) => {
  const {
    firstname, lastname, email, username, password, type,
  } = req.query;
  const body = {
    firstname, lastname, email, username, password, type,
  };
  const insertUser = 'INSERT INTO users SET ?';
  con.query(insertUser, body, (err) => {
    if (err) {
      return res.send(err);
    }
    return res.sendStatus(200);
  });
});


module.exports = { app, con };
