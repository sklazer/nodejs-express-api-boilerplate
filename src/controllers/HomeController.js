module.exports = {

    index: async (req, res) => {
        res.status(200).send({ message: 'Welcome to index page' });
    },

    about: async (req, res) => {
        res.status(200).send({response: req.authUser});
    }

}