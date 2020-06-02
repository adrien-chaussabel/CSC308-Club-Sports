/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) {
    return err;
  }
  console.log('Connected to Database!');
});

router.get('/:name/:gender', (req, res) => {
  // GET method that returns a team based on name and gender.
  const name = req.params.name;
  const gender = req.params.gender;

  const sqlQuery = `SELECT * FROM team WHERE name = "${name}" AND gender = "${gender}";`;
  connection.query(sqlQuery, (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(rows);
  });
});

router.post('/add', (req, res) => {
  // POST method that adds an entry into the team table.
  const name = req.body.name;
  const gender = req.body.gender;
  const email = req.body.email;
  const facebook = req.body.facebook;
  const instagram = req.body.instagram;
  const website = req.body.website;
  const about = req.body.about;

  const sqlQuery = `INSERT INTO team (name, gender, email, instagram, facebook, website, about) 
                    values ("${name}", "${gender}", "${email}", "${instagram}", "${facebook}", 
                    "${website}", "${about}");`;
  connection.query(sqlQuery, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.post('/update', (req, res) => {
  // POST method that updates an entry in the team table based on gender and name.
  const name = req.body.name;
  const gender = req.body.gender;
  const email = req.body.email;
  const facebook = req.body.facebook;
  const instagram = req.body.instagram;
  const website = req.body.website;
  const about = req.body.about;
  const oldName = req.body.oldName;
  const oldGender = req.body.oldGender;

  const sqlQuery = `UPDATE team SET name = "${name}", gender = "${gender}", email = "${email}", 
                    instagram = "${instagram}", facebook = "${facebook}", website = "${website}", 
                    about = "${about}" WHERE name = "${oldName}" AND gender = "${oldGender}";`;
  connection.query(sqlQuery, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;