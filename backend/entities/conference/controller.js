const Conference = require('./model');
const generateDiscussionSlug = require('../../utilities/tools').generateDiscussionSlug;

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

const getConferenceById = (id) => {
    return new Promise((resolve, reject) => {
        Conference.findById(id)
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
            date: conference.date,
            name: conference.name,
            startTime: conference.startTime,
            endTime: conference.endTime,
            address: conference.address,
            city: conference.city,
            roomName: conference.roomName,
            roomAvailability: conference.roomAvailability,
            keywords: conference.keywords,
            content: conference.content,
            conference_slug: generateDiscussionSlug(conference.name),
            participants: conference.participants,
        });

        newConference.save((error) => {
            if (error) {
                console.log(error);
                reject(error);
            }
            resolve(newConference);
        });
    }).then(() => {
        return new Promise((resolve, reject) => {
            Conference
                .find({})
                .exec((error, results) => {
                    if (error) {
                        console.log(error);
                        reject(error);
                    } else if (!results) reject(null);
                    else resolve(results);
                });
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
                        if (key === 'participants') {
                            console.log(typeof updates[key][0]);
                            conference[key].push(updates[key][0]);
                            console.log(conference[key]);
                        }
                        // if (key === 'name') {
                        //     console.log(conference[key]);
                        //     conference[key] = updates[key];
                        //     conference['conference_slug'] = generateDiscussionSlug(updates.name);
                        // }
                        else {
                            conference[key] = updates[key];
                        }
                    });
                    console.log(conference['participants'],'test');
                    conference.save((error) => {
                        if (error) { console.log(error); reject(error); }
                        else {
                            console.log(conference);
                            resolve(conference); }
                    });
                }
            });
    }).then(() => {
        return new Promise((resolve, reject) => {
            Conference
                .find({})
                .exec((error, results) => {
                    if (error) {
                        console.log(error);
                        reject(error);
                    } else if (!results) reject(null);
                    else {
                        resolve(results);}
                });
        });
    });
};

const deleteConference = (id) => {
    return new Promise((resolve, reject) => {
        Conference.remove({ _id: id })
            .exec((error) => {
                if (error) {
                    console.log(error);
                    reject({ deleted: false });
                } else {
                    resolve({ deleted: true });
                }
            });
    }).then(() => {
        return new Promise((resolve, reject) => {
            Conference
                .find({})
                .exec((error, results) => {
                    if (error) {
                        console.log(error);
                        reject(error);
                    } else if (!results) reject(null);
                    else resolve(results);
                });
        });
    });
};

module.exports = {
    getAllConferences,
    getLatestgetAllConferences,
    createConference,
    updateConference,
    deleteConference,
    getConferenceById
};
