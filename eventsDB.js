// Code for the events Database, currently hosted on Shah's/Sam's local machine.
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const read_router = express.Router();
const write_router = express.Router();
const update_router = express.Router();
const delete_router = express.Router();
const port = process.env.PORT || '3000';

app.use(bodyParser.json());
app.use('/viewevents', read_router);
app.use('/postevents', write_router);
app.use('/updateevent', update_router);
app.use('/deleteevent', delete_router);

//Creating Connection to DataBase.
const mySqlConnection = mysql.createConnection(
    {
      host: "35.239.17.119",
      user: "root",
      password: "csc308sports",
      database: "clubsports",
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
//Handling GET Request.
read_router.get("/", (req, res) => {
    const sqlQuery = "SELECT * from events";
    mySqlConnection.query(sqlQuery, (err, rows, fields) => {
        if(err){
            console.log("Error in GET request to events database.");
            return;
        }
        res.send(rows);
    });
});

read_router.get("/eventsColumn", (req, res) => {
    //GET request for events column.
    //Returns the 4 recent events.
    //Returns row in the case where number of events is less than 4.
    const sqlQuery = "SELECT * from events";
    mySqlConnection.query(sqlQuery, (err, rows, fields) => {
        if(err){
            console.log("Error in GET request to events database.");
            return;
        }
        if(rows.length < 4){
            res.send(rows);
        }
        returnArray = []
        for(i = row.length - 5; i < rows.length; i ++){
            returnArray.push(rows[i]);
        }
        res.send(returnArray);
    })
})

//Handling POST Request.
write_router.post("/postEvent", (req, res) => {
    //POST request for new Event.
    const eventSport = req.body.sport;
    const eventDate = req.body.date;
    const eventTime = req.body.time;
    const eventLocation = req.body.location;
    const eventDescription = req.body.description;
    const sqlQuery = `INSERT INTO events (sport, date, time, location, description)
                      values ("${eventSport}", ${eventDate}, ${eventTime}, "${eventLocation}", 
                       "${eventDescription}");`;

    mySqlConnection.query(sqlQuery, (err) => {
        if(err){
            console.log("Error in POST request to events database.");
            return;
        }
        console.log("POST request successfull.");
    });
});

update_router.post("/updateEvent", (req, res) => {
    //POST request for updating existing Event.
    const eventID = req.body.id;
    const eventSport = req.body.sport;
    const eventDate = req.body.date;
    const eventTime = req.body.time;
    const eventLocation = req.body.location;
    const eventDescription = req.body.description;
    const sqlQuery = `UPDATE events SET sport = "${eventSport}", date = ${eventDate}, 
                      time = ${eventTime}, location = "${eventLocation}",
                      description = "${eventDescription}" WHERE id = ${eventID};`;

    mySqlConnection.query(sqlQuery, (err) => {
        if(err){
            console.log("Error in POST request to events database.");
            return;
        }
        console.log("POST request successfull.");
    });
});

//Handling DELETE request.
delete_router.delete('/deleteEvent', (req, res) => {
    //DELETE request that deletes events based on event id.
    const eventID = req.body.id;
    const sqlQuery = `DELETE FROM events WHERE id = ${eventID};`;

    mySqlConnection.query(sqlQuery, (err) => {
        if(err){
            console.log("Error in processing DELETE request.");
            return;
        }
        console.log("DELTE request Successfull.");
    })
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
