const Sequelize = require('sequelize');
const sequelize = require('./db');

const User = sequelize.define(
    'user',
    {
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        userType: Sequelize.ENUM('student', 'organization'),
        interests: Sequelize.STRING,
        skills: Sequelize.STRING,
    },
);

const Job = sequelize.define(
    'job',
    {
        hoursCompleted: Sequelize.INTEGER,
        description: Sequelize.STRING,
        postingID: Sequelize.INTEGER,
        studentID: Sequelize.INTEGER,
    },
);

const Posting = sequelize.define(
    'posting',
    {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        org: Sequelize.STRING,
        userID: Sequelize.INTEGER,
    },
);

module.exports = {
    User: User,
    Job: Job,
    Posting: Posting,
};
