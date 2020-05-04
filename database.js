var mysql = require('mysql');
var express = require('express');
var app = express();
require('dotenv').config();

var bodyParser = require('body-parser');
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database

});

con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});

app.get('/users', function(req, res){
    con.query('select * from users', function(error, rows, fields){
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});

app.get('/adduser', (req, res) => {
    let body = {name=req.body.fullname,
        username = req.body.username,
        pass = req.body.password};
    let sql = 'INSERT INTO users SET ?'
    let query = con.query(sql, body, (err, result)=> {
        if(err) throw err;
        console.log(result);
        res.send('user.inserted')
    });
});

app.post('/users', function(req, res){
    var name=req.body.fullname;
    var username = req.body.username;
    var pass = req.body.password;
    con.query("INSERT INTO `users` (fullname, username, password) VALUES (?, ?, ?)",
    fullname.toString(), username.toString(), password.toString(), function(err, result){
        if(err) throw err;
        console.log("1 record inserted");
    });
    res.send(username);
});