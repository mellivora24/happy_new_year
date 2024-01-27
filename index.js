"use strict";

const express = require('express');
const app = express();

var PORT = process.env.PORT || 5000;

app.use('/public', express.static('public'));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://pfoz-iot.onrender.com/');
    res.setHeader('Access-Control-Allow-Origin', 'https://pfoz-iot.onrender.com/');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/public/view/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running: http://127.0.0.1:${PORT}`);
});