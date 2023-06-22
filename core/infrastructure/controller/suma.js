const express = require('express');
const holamundo = express();
holamundo.get('/suma', (req, res) =>{
    let a = 2;
    let b = 3;
    let resultado =  a+b;
        res.send('el resultado de a + b es =' + resultado);
});
module.exports = holamundo;
