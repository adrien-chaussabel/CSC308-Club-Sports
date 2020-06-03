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
  return 0;
});


/* shows all events in events table */
router.get('/eventsBox', (req, res) => {
  const selectTopEvents = `SELECT id, team_name, DATE_FORMAT(date, "%M %d") as date, 
    TIME_FORMAT(time, "%h:%i %p")as time, location, description 
    FROM events
    ORDER BY YEAR(date) ASC, MONTH(date) ASC, DAY(date) ASC
    LIMIT 4;`;
  connection.query(selectTopEvents, (err, results) => {
    if (err) {
      return res.send(err);
    }
    return res.json({
      data: results,
    });
  });
});


/* shows all events in events table */
router.get('/', (req, res) => {
  const selectAllEvents = 'SELECT * FROM events';
  connection.query(selectAllEvents, (err, results) => {
    if (err) {
      return res.send(err);
    }
    return res.json({
      data: results,
    });
  });
});

router.post('/postEvent', (req, res) => {
  // POST request for new Event.
  const {
    // eslint-disable-next-line camelcase
    team_name, team_id, date, time, location, description,
  } = req.query;
  const body = {
    team_name, team_id, date, time, location, description,
  };
  const sqlQuery = 'INSERT INTO events SET ?';
  connection.query(sqlQuery, body, (err) => {
    if (err) {
      return res.sendStatus(400);
    }
    return res.sendStatus(201);
  });
});

module.exports = router;
