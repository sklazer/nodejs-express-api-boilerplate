const jwt = require('jsonwebtoken');

const key = '123456';

function auth(req, res, next) {

    let token = req.headers['authorization'];
    if (token && token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    } else {
        return res.status(401).send({
            error: "No token provided."
        });
    }

    try {
        const decoded = jwt.verify(token, key);
        req.authUser = decoded;
        next();
    } catch (ex) {
        res.status(400).send({result: {statusCode: 400, error: "INVALID_TOKEN"}})
    }
}

module.exports = auth;