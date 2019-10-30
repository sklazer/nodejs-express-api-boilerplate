const HomeController = require('../controllers/HomeController');
const AuthController = require('../controllers/AuthController');

var appRouter = function (app) {
    app.get('/', HomeController.index);

    app.post('/auth/login', AuthController.login);
    app.get('/auth/register', AuthController.register);
}

module.exports = appRouter;