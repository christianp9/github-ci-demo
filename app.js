
const router = require('./operation-service');
const PORT = 3000;


router.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
