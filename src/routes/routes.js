const HomeController = require('../controllers/HomeController');

var appRouter = function (app) {
    app.get('/', HomeController.index);
}

module.exports = appRouter;