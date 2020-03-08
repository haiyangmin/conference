// modules for server
const express = require('express');
const mongoose = require('mongoose');

// server configurations
const serverConfigs = require('./config/serverConfig');

const conferencesMockData = require('./backend/mockdata/conferences');
const userMockData = require('./backend/mockdata/users');

const createConference = require('./backend/entities/conference/controller').createConference;
const createUser = require('./backend/entities/user/controller').createUser;

const options = {
    poolSize: 10,
    bufferMaxEntries: 0,
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

mongoose.connect(serverConfigs.DBURL,options)
    .then(
        () => {
            console.log('connected to mongodb');
            console.log(userMockData);
            // conferencesMockData.forEach((data) => {
            //     createConference(data)
            // });
            // userMockData.forEach((data) => {
            //     createUser(data)
            // })
        },
        (err) => {
            console.log('some problem with the connection to mongodb' +err);
        }
    );

// initialize express
const app = express();

// apply express configs
require('./backend/express')(app, serverConfigs);


// fire up the server
app.listen(serverConfigs.PORT, (error) => {
    if (error) throw error;
    console.log('Server running on port: ' + serverConfigs.PORT);
});
