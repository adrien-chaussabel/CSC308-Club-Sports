const express=require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require("mysql");

const app=express();

const selectAll = "SELECT * FROM users"

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "csc308sports",
    database: "www"

});

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
    const {fullname, username, password} = req.query;
    const insertUser = "INSERT INTO users (fullname, username, password') VALUES ('', '', '')";
    con.query(insertUser, (err, results) => {
        if (err){
            return res.send(err);
        }
        else {
            res.send("successfully added product")
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

/*app.post('/',(req,res) =>{
    let data = {username: req.body.username, fullname:req.body.fulname,
    password:req.body.password};
    let sql = "INSERT users SET ?"
    let query = connection.query(sql, data,(err, results) => {
        if(err) throw err;
        req.redirect('/');
    });
});


app.get('/users', function (req, res) {
    con.query('SELECT * FROM users', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});

app.post('/adduser', (req, res) => {
    let body = {name: req.body.fullname,
        username: req.body.username,
        pass: req.body.password};
    let sql = 'INSERT INTO users SET ?'
    let query = con.query(sql, body, (err, result)=> {
        if(err) throw err;
        console.log(result);
        res.send('user.inserted')
    });
}); */

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
