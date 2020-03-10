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
            roomName: conference.roomName,
            roomAvailability: conference.roomAvailability,
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

const updateConference = (id,updates) => {
    return new Promise((resolve, reject) => {
        Conference.findById(id)
            .exec((error, conference) => {
                if (error) { console.log(error); reject(error); }
                else if (!conference) reject(null);
                else if (conference) {
                    Object.keys(updates).forEach((key) => {
                        conference[key] = updates[key];
                    });
                    conference.save((error) => {
                        if (error) { console.log(error); reject(error); }
                        else { resolve(conference); }
                    });
                }
            });
    });
};

const deleteConference = (id) => {
    return new Promise((resolve, reject) => {
        Conference.remove({ _id: id })
            .exec((error) => {
            if (error) { console.log(error); reject({ deleted: false }); }
            else { resolve({ deleted: true }); }
        });
    });
};

module.exports = {
    getAllConferences,
    getLatestgetAllConferences,
    createConference,
    updateConference,
    deleteConference
};
