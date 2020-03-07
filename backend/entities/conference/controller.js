const Conference = require('./model');

const getAllConferences = () => {
    return new Promise((resolve, reject) => {
        Conference
            .find({})
            .exec((error, results) => {
                if (error) { console.log(error); reject(error); }
                else if (!results) reject(null);
                else resolve(results);
            });
    });
};


const getLatestgetAllConferences = () => {
    return new Promise((resolve, reject) => {
        Conference
            .findOne()
            .sort({ date: -1 })
            .limit(1)
            .exec((error, result) => {
                if (error) { console.log(error); reject(error); }
                else if (!result) reject(null);
                else resolve(result);
            });
    });
};

const createConference = (conference) => {
    return new Promise((resolve, reject) => {
        const newConference = new Conference({
            date: new Date(),
            name: conference.name,
            startTime: conference.startTime,
            endTime: conference.endTime,
            address: conference.address,
            roomsAvailability: conference.roomsAvailability,
            participants: conference.participants,
        });

        newConference.save((error) => {
            if (error) {
                console.log(error);
                reject(error);
            }

            resolve(newConference);
        });
    });
};

const updateConference = (name,updates) => {
    return new Promise((resolve, reject) => {
        Conference.findOne({ name }, (error, conference) => {
            if (error) { console.log(error); reject(error); }
            else if (!conference) reject(null);
            else if (conference) {
                conference.name = updates.name;
                conference.startTime = updates.startTime;
                conference.endTime = updates.endTime;
                conference.address = updates.address;
                conference.roomsAvailability = updates.roomsAvailability;
                conference.participants = updates.participants;

                conference.save((error) => {
                    if (error) { console.log(error); reject(error); }
                    else { resolve(conference); }
                });
            }
        });
    });
};

module.exports = {
    getAllConferences,
    getLatestgetAllConferences,
    createConference,
    updateConference
};
