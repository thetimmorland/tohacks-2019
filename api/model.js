const Sequelize = require('sequelize');
const sequelize = getConnection();

class User extends Sequelize.Model {}
User.init(
    {
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        userType: Sequelize.ENUM('student', 'organization'),
        interests: Sequelize.STRING,
        skills: Sequelize.STRING,
    },

    {
        sequelize,
        modelName: 'user',
    },
);

class Job extends Sequelize.Model {}
Job.init(
    {
        hoursCompleted: Sequelize.INTEGER,
        description: Sequelize.STRING,
        postingID: Sequelize.INTEGER,
        studentID: Sequelize.INTEGER,
    },

    {
        sequelize,
        modelName: 'job',
    },
);

class Posting extends Sequelize.Model {}
Posting.init(
    {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        org: Sequelize.STRING,
        userID: Sequelize.INTEGER,
    },

    {
        sequelize,
        modelName: 'posting',
    }
);

module.exports = {
    User: User,
    Job: Job,
    Posting: Posting,
};
