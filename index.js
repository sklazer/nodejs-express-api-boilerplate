const express = require('express');
const app = express();

require('./src/bootstrap/cors')(app);
require('./src/bootstrap/routes')(app);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});

module.exports = server;