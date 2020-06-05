const express = require('express');

const router = express.Router();
const connection = require('../databaseCon');

router.get('/:name/:gender', (req, res) => {
  // GET method that returns a team based on name and gender.
  const { name } = req.params;
  const { gender } = req.params;

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
  const { name } = req.body;
  const { gender } = req.body;
  const { email } = req.body;
  const { facebook } = req.body;
  const { instagram } = req.body;
  const { website } = req.body;
  const { about } = req.body;

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
  const { name } = req.body;
  const { gender } = req.body;
  const { email } = req.body;
  const { facebook } = req.body;
  const { instagram } = req.body;
  const { website } = req.body;
  const { about } = req.body;
  const { oldName } = req.body;
  const { oldGender } = req.body;

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

router.delete('/deleteTeam/:name/:gender', (req, res) => {
  const { name } = req.params;
  const { gender } = req.params;

  const sqlQuery = `DELETE FROM team WHERE name = "${name}" AND gender = "${gender}";`;
  connection.query(sqlQuery, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(404);
    }
  });
});

module.exports = router;
