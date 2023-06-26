const express = require('express');
const router = express();
// Home page route.
router.get("/suma", function (req, res) {
    let a = 2;
    let b = 3;
    let resultado = a+b;
    res.send('la suma de a + b es = '+resultado);
});

// About page route.
router.get("/resta", function (req, res) {
    let a = 8;
    let b = 7;

    let resultado = a-b;
    res.send('la resta de a - b es = '+resultado);
});

router.get("/division", function (req, res) {
    let a = 10;
    let b = 2;
    let resultado = a/b;
    res.send('la division de a / b es = '+resultado);
});

module.exports = router;
