const express = require('express');
const routes = require('../routes/routes');
const passport = require('passport');

module.exports = function (app) {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(passport.initialize());
    routes(app);
};