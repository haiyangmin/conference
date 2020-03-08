const getUserByName = require('./controller').getUserByName;
const createUser = require('./controller').createUser;
const getAllUser = require('./controller').getAllUser;

const userAPI = (app) => {

    app.get('/api/user/:username', (req, res) => {
        getUserByName(req.params.username).then(
            result => {
                res.send(result);
            },
            error => {
                res.send({ error });
            }
        );
    });

    app.get('/api/user', (req, res) => {
        getAllUser().then(
            result => {
                res.send(result);
            },
            error => {
                res.send({ error });
            }
        );
    });

    app.post('/api/user/:username', (req, res) => {
        createUser(req.body).then(
            (result) => {
                res.send(result);
            },
            (error) => {
                console.log(error);
                res.send({ userCreated: false });
            }
        );
    });

};

module.exports = userAPI;
