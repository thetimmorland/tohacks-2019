const express = require('express')
const path = require('path')
const app = express()
const port = 8000
const dotenv = require('dotenv')
const mysql = require('mysql')
const runQuery = require('./db')

if (!process.env.DB_USER || !process.env.DB_PASS) {
    dotenv.config()
}

// SEQUELIZE TEST
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    })

sequelize.authenticate().then(() => {
    console.log('success')
})

class User extends Sequelize.Model {}

User.init({
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    }, lastName: {
        type: Sequelize.STRING,
        allowNull: false
    }, email: {
        type: Sequelize.STRING,
        allowNull: false
    }, password: {
        type: Sequelize.STRING
    }, userType: {
        type: Sequelize.ENUM('student', 'organization'),
        allowNull: false
    }, interests: {
        type: Sequelize.STRING,
        allowNull: false
    }, skills: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user'
})

User.sync()

//const Project = sequelize.import(__dirname + '/models/')
//Project.sync()
// User.create({
//     firstName: 'Timbo',
//     lastName: 'More Land',
//     email: 'test@test.com',
//     password: 'hunter2',
//     userType: 'student',
//     interests: 'yeet',
//     skills: 'N/A'
// }).then(user => {
//     console.log(user)
// })

// API ENDPOINTS HERE (always lead route with API)
app.get('/api', function (req, res) {
    res.send('Hello World!')
})

// Serve static Frontend dashboard
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) { // * character allows for internal routing in our frontend
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
