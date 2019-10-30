const resp = require('../utils/responses');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models').User;

const key = '123456';

module.exports = {

    login: async (req, res) => {
        
        let token = jwt.sign({ username: 'testuser' }, key, { expiresIn: '24h' });
        res.json({
            success: true,
            message: 'Authentication successful!',
            token: token
        });

    },
    register: async (req, res) => {
        
        userCreated = await User.create({
            'login' : 'test',
            'email' : 'test@test.com',
            'password' : bcrypt.hashSync('123456', 10)
        });

        resp.setSuccess(201, 'user Added!', userCreated);
        return resp.send(res);


    }
}

