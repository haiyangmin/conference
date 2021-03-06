const User = require('./model');

const getUserById = (user_id) => {
    return new Promise((resolve, reject) => {
        User.findOne({ _id: user_id }, (error, user) => {
            if (error) { console.log(error); reject(error); }
            else if (!user) reject(null);
            else resolve(user);
        });
    });
};


const getAllUser = () => {
    return new Promise((resolve, reject) => {
        User
            .find({})
            .exec((error, results) => {
                if (error) { console.log(error); reject(error); }
                else if (!results) reject(null);
                else resolve(results);
            });
    });
};



const getUserByName = (username) => {
    return new Promise((resolve, reject) => {
        User
            .findOne({ username })
            .lean()
            .exec((error, result) => {
                if (error) { console.log(error); reject(error); }
                else if (!result) reject(null);
                else resolve(result);
            });
    });
};

const createUser = (user) => {
    return new Promise((resolve, reject) => {
        const newUser = new User({
            date: new Date(),
            username: user.username,
            email: user.email,
            role: user.role
        });
        newUser.save((error) => {
            if (error) {
                console.log(error);
                reject(error);
            }
            resolve(newUser);
        });
    });
};

module.exports = {
    getUserById,
    getAllUser,
    getUserByName,
    createUser,
};
