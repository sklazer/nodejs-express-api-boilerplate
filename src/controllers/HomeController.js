module.exports = {

    index: async (req, res) => {
        res.status(200).send({ message: 'Welcome to index page' });
    }

}