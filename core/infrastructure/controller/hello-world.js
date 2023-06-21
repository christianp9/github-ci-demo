const express = require('express');
const holamundo = express();
holamundo.get('/', (req, res) =>
    res.send('Hello world!'));
module.exports = holamundo;
