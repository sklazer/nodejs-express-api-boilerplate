const HomeController = require('../controllers/HomeController');
const AuthController = require('../controllers/AuthController');
const auth = require('../middleware/auth');

var appRouter = function (app) {
    app.get('/', HomeController.index);

    app.get('/auth/login', AuthController.login);
    app.get('/auth/register', AuthController.register);

    app.post('/user/about', auth, HomeController.about);
}

module.exports = appRouter;