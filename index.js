const express = require('express');
const app = express();

require('./src/bootstrap/cors')(app);
require('./src/bootstrap/routes')(app);

var server = app.listen(3000, function () {
    console.log("Application running on port", server.address().port);
});

module.exports = server;


// https://medium.com/@victorsteven/restful-api-with-nodejs-express-postgresql-sequelize-travis-mocha-coveralls-and-code-climate-f28715f7a014