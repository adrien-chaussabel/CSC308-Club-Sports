const express = require('express');

const crypto = require('crypto');

const cryptoAlgorithm = 'aes-256-ctr';
const cryptoPassword = '4g632jzrb26DETTsr20';
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '35.239.17.119',
  user: 'root',
  password: 'csc308sports',
  database: 'clubsports',
  multipleStatements: true,
});

function encryptPassword(password) {
  // Function that encrypts/hashes password.
  const cipher = crypto.createCipher(cryptoAlgorithm, cryptoPassword);
  let crypt = cipher.update(password, 'utf-8', 'hex');
  crypt += cipher.final('hex');
  return crypt;
}

router.get('getUser/:userName/:password', (req, res) => {
  // GET request for user.
  const { userName } = req.params;
  const encryptedPassword = encryptPassword(req.params.password);
  const sqlQuery = `SELECT * FROM users WHERE username = ${userName} 
    AND password = ${encryptedPassword};`;
  connection.query(sqlQuery, (err, rows) => {
    if (err) {
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

router.post('postUser', (req, res) => {
  // POST request for adding a new user.
  const { userName } = req.body.userName;
  const password = encryptPassword(req.body.password);
  const { email } = req.body.email;
  const { firstName } = req.body.firstName;
  const { lastName } = req.body.lastName;
  const { type } = req.body.type;

  const sqlQuery = `INSERT INTO users (firstName, lastName, email, username, password, type)
    values ("${firstName}", "${lastName}", "${email}", "${userName}", "${password}", 
    ${type});`;
  connection.query(sqlQuery, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

router.post('updateUser', (req, res) => {
  // POST request for updating am existing user.
  const { userName } = req.body.userName;
  const password = encryptPassword(req.body.password);
  const { email } = req.body.email;
  const { firstName } = req.body.firstName;
  const { lastName } = req.body.lastName;
  const { type } = req.body.type;

  const sqlQuery = `UPDATE sports SET firstName = "${firstName}", lastName = "${lastName}", 
    email = "${email}", username = "${userName}", password = "${password}", type = ${type};`;
  connection.query(sqlQuery, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

module.exports = router;
