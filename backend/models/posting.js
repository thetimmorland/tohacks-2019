const getConnection = require('../db').getConnection
const Sequelize = require('sequelize')
const sequelize = getConnection()

class Posting extends Sequelize.Model {}

Posting.init({
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    org: Sequelize.STRING,
    userID: Sequelize.INTEGER
}, {
    sequelize,
    modelName: 'posting'
})

module.exports = {
    Posting: Posting
}