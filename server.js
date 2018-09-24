const express = require('express');

const app = new express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', (req, res) => {
    return res.status(500).send({
        username: 'johndoe123',
        dob: '12/02/1993',
        'timestamp': Date.now()
    }).status;
})



app.listen('4000', () => {
    console.log('started at http://localhost:4000/');
});