const getAllConferences = require('./controller').getAllConferences;
const getLatestgetAllConferences = require('./controller').getLatestgetAllConferences;
const createConference = require('./controller').createConference;
const updateConference = require('./controller').updateConference;
const deleteConference = require('./controller').deleteConference;

const conferenceAPI = (app) => {

    app.get('/api/conferences', (req, res) => {
        getAllConferences().then(
            (result) => { res.send(result); },
            (error) => { res.send(error); }
        );
    });

    app.get('/api/conferences/latest', (req, res) => {
        getLatestgetAllConferences().then(
            (result) => { res.send(result); },
            (error) => { res.send(error); }
        );
    });

    app.post('/api/conference', (req, res) => {
        createConference(req.body).then(
            (result) => {
                res.send(result);
            },
            (error) => {
                console.log(error);
                res.send({ userCreated: false });
            }
        );
    });

    app.put('/api/conference/:id', (req, res) => {
        updateConference(req.params.id, req.body).then(
            (result) => {
                res.send(result);
            },
            (error) => {
                console.log(error);
                res.send({ conferencesUpdated: false });
            }
        );
    });

    app.delete('/api/conference/:id', (req, res) => {
        deleteConference(req.params.id).then(
            (result) => {
                res.send(result);
            },
            (error) => {
                console.log(error);
                res.send({ conferencesUpdated: false });
            }
        );
    });
};

module.exports = conferenceAPI;
