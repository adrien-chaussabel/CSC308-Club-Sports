//Code for the events Database, currently hosted on Shah's/Sam's local machine.
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const read_router = express.Router();
const write_router = express.Router();
const port = process.env.PORT || '3000';

app.use(bodyParser.json());
app.use('/viewevents', read_router);
app.use('/postevents', write_router);

//Creating Connection to DataBase.
const mySqlConnection = mysql.createConnection(
    {
      host: "localhost",
      user: "default",
      password: "default",
      database: "events",
      multipleStatements: true
    }
);

//Connecting the DataBase.
mySqlConnection.connect((err) => {
    if(err){
        console.log("Error connecting to database.");
    }
    else{
        console.log("No Error in connecting to database");
    }
});

//Routers.
//Handling Read Request.
read_router.get("/", (req, res) => {
    const sqlQuery = "SELECT * from events";
    mySqlConnection.query(sqlQuery, (err, rows, fields) => {
        if(err){
            console.log("Error in making query to events database.");
            return;
        }
        res.send(rows);
    });
});

//Handling Write Request.
write_router.post("/", (req, res) => {
    //Still working on this part ...
    const sqlQuery = "";
    mySqlConnection.query(sqlQuery, (err) => {
        if(err){
            console.log("Error in updating database.");
            return;
        }

    });
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
