const getConnection = require('../db').getConnection
const Sequelize = require('sequelize')
const sequelize = getConnection()

class Job extends Sequelize.Model {}

Job.init({
    hoursCompleted: Sequelize.INTEGER,
    description: Sequelize.STRING,
    postingID: Sequelize.INTEGER,
    studentID: Sequelize.INTEGER
}, {
    sequelize,
    modelName: 'job'
})

module.exports = {
    Job: Job
}