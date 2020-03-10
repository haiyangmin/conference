const getAllConferences = require('./controller').getAllConferences;
const getLatestgetAllConferences = require('./controller').getLatestgetAllConferences;
const createConference = require('./controller').createConference;
const updateConference = require('./controller').updateConference;
const deleteConference = require('./controller').deleteConference;
const getConferenceById = require('./controller').getConferenceById;

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

    app.get('/api/conference/:id', (req, res) => {
        getConferenceById(req.params.id).then(
            (result) => {
                res.send(result);
            },
            (error) => {
                console.log(error);
                res.send(error);
            }
        );
    });

    app.put('/api/conference', (req, res) => {
        updateConference(req.body.id, req.body.updates).then(
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
