const generateDiscussionSlug = (discussionTitle) => {
    const ObjectId = require('mongoose').Types.ObjectId();
    return discussionTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '_' + ObjectId;
};

module.exports = {
    generateDiscussionSlug,
};
