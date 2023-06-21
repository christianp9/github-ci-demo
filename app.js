const app = require('./core/infrastructure/controller/hello-world');
const port = process.env.PORT || 3000;
module.exports = app.listen(port,
    () => console.log(`Ready on port http://localhost:${port}`)
);
