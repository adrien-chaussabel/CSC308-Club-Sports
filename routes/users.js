/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');

const { cryptoAlgorithm } = process.env;
const { cryptoPassword } = process.env;
const { cryptoIV } = process.env;
const router = express.Router();


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  multipleStatements: true,
});


// eslint-disable-next-line consistent-return
connection.connect((err) => {
  if (err) {
    return err;
  }
  console.log('Connected to Database!');
});


function encryptPassword(password) {
  // Function that encrypts/hashes password.
  const cipher = crypto.createCipheriv(cryptoAlgorithm, cryptoPassword, cryptoIV);
  let crypt = cipher.update(password, 'utf-8', 'hex');
  crypt += cipher.final('hex');
  return crypt;
}


router.post('/getUser', (req, res) => {
  // GET request for user.
  // console.log('This is a GET request');
  const { username } = req.body;
  const encryptedPassword = encryptPassword(req.body.password);
  const sqlQuery = `SELECT * FROM users WHERE username = "${username}"
    AND password = "${encryptedPassword}";`;

  connection.query(sqlQuery, (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    if (rows.length <= 0) {
      res.sendStatus(404);
      return;
    }
    res.send(rows);
  });
});

router.post('/postUser', (req, res) => {
  // POST request for adding a new user.
  console.log(req.body);
  const password = encryptPassword(req.body.password);
  const {
    username, email, firstName, lastName, type,
  } = req.body;

  const sqlQuery = `INSERT INTO users (firstName, lastName, email, username, password, type)
    values ("${firstName}", "${lastName}", "${email}", "${username}", "${password}", 
    "${type}");`;

  connection.query(sqlQuery, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

router.post('/updateUser', (req, res) => {
  // POST request for updating an existing user.
  const { userName } = req.body;
  const password = encryptPassword(req.body.password);
  const { email } = req.body;
  const { firstName } = req.body;
  const { lastName } = req.body;
  const { type } = req.body;
  const { oldUserName } = req.body;
  const oldPassword = encryptPassword(req.body.oldPassword);

  const sqlQuery = `UPDATE users SET firstName = "${firstName}", lastName = "${lastName}", 
    email = "${email}", username = "${userName}", password = "${password}", type = "${type}"
    WHERE username = "${oldUserName}" AND password = "${oldPassword}";`;
  connection.query(sqlQuery, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
