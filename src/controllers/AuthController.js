const resp = require('../utils/responses');

const User = require('../models').User;

module.exports = {

    login: async (req, res) => {
        res.status(200).send({ message: 'Login page' });
    },
    register: async (req, res) => {
        
        userCreated = await User.create({
            'login' : 'test',
            'email' : 'test@test.com',
            'password' : '121132123'
        });

        resp.setSuccess(201, 'user Added!', userCreated);
        return resp.send(res);


    }
}

