var express=require('express');

var app=express();

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