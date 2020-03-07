const getAllConferences = require('./controller').getAllConferences;
const getLatestgetAllConferences = require('./controller').getLatestgetAllConferences;
const createConference = require('./controller').createConference;
const updateConference = require('./controller').updateConference;

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

    app.put('/api/conferences', (req, res) => {
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

    app.put('/api/conferences/:name', (req, res) => {
        updateConference(req.params.name, req.body).then(
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
