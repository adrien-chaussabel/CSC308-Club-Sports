require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require("mysql");

const app = express();

const selectAllUsers = "SELECT * FROM users"
const selectAllEvents = `SELECT id, sport, DATE_FORMAT(date, "%M %d") as date, 
TIME_FORMAT(time, "%h:%i %p")as time, location, description 
FROM events
ORDER BY YEAR(date) ASC, MONTH(date) ASC, DAY(date) ASC
LIMIT 4;`

/*connection with Google server*/
var con = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database

});

/*var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "csc308sports",
    database: "www"

});*/

con.connect(err => {
    if(err){
        return err;
    }
    console.log("connected!");
});

app.use(cors());

app.get("/", (req, res) => {
    res.send("hello from the server")
})

/*shows all users in users table*/
app.get("/users", (req, res) => {
    con.query(selectAllUsers, (err, results) => {
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data: results
            })
        }
    });
});

/*shows all events in events table*/
app.get("/events", (req, res) => {
    con.query(selectAllEvents, (err, results) => {
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data: results
            })
        }
    });
});

/*adds user to users table*/
app.get('/users/add', (req, res) =>{
    const {firstname, lastname, email, username, password, type} = req.query;
    let body = {firstname, lastname, email, username, password, type}
    const insertUser = "INSERT INTO users SET ?";
    con.query(insertUser, body, (err, results) => {
        if (err){
            return res.send(err);
        }
        else {
            res.send("successfully added user")
        }
    });
});

/*fake data for backend work*/
app.get('/api/events', (req, res) => {
    const events = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Joe', lastName: 'Swanson'},
        {id: 3, firstName: 'Kanye', lastName: 'West'}
    ];

    res.json(events);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
