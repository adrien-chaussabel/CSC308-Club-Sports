/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');

const cryptoAlgorithm = process.env.cryptoAlgorithm;
const cryptoPassword = process.env.cryptoPassword;
const cryptoIV = process.env.cryptoIV;
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


router.get('/getUser/:userName/:password', (req, res) => {
  // GET request for user.
  // console.log('This is a GET request');
  const userName = req.params.userName;
  const encryptedPassword = encryptPassword(req.params.password);
  const sqlQuery = `SELECT * FROM users WHERE username = "${userName}" 
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
  const userName = req.body.userName;
  const password = encryptPassword(req.body.password);
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const type = req.body.type;

  const sqlQuery = `INSERT INTO users (firstName, lastName, email, username, password, type)
    values ("${firstName}", "${lastName}", "${email}", "${userName}", "${password}", 
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
  // POST request for updating am existing user.
  const userName = req.body.userName;
  const password = encryptPassword(req.body.password);
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const type = req.body.type;
  const oldUserName = req.body.oldUserName;
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
