const express=require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require("mysql");

const app=express();

const selectAll = "SELECT * FROM users"

var con = mysql.createConnection({
    host: "35.239.17.119",
    user: "root",
    password: "csc308sports",
    database: "clubsports"

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

app.get("/users", (req, res) => {
    con.query(selectAll, (err, results) => {
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

app.get('/users/add', (req, res) =>{
    const {firstname, lastname, email, username, password} = req.query;
    let body = {firstname, lastname, email, username, password}
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
