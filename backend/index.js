const express = require('express')
const app = express();
const path = require('path');
const port = 8000

const dotenv = require('dotenv')
if (!process.env.DB_USER || !process.env.DB_PASS) {
    dotenv.config()
}

const UserRoutes = require('./UserRoutes')
app.use('/api/users', UserRoutes);

const PostingRoutes = require('./PostingRoutes')
app.use('/api/postings', PostingRoutes)

const JobRoutes = require('./JobRoutes')
app.use('/api/jobs', JobRoutes)
// import user only after env variables have been enabled
const User = require('./models/user').User

// API ENDPOINTS HERE (always lead route with API)
app.get('/api/register', function (req, res) { // create a fake user example
    User.create({
        firstName: 'Timbo4',
        lastName: 'More Land',
        email: 'test@test.com',
        password: 'hunter2',
        userType: 'student',
        interests: 'yeet',
        skills: 'N/A'
    }).then(user => {
        console.log(user)
    })
    res.send('test registration')
})

const Posting = require('./models/posting').Posting
Posting.sync()
app.get('/api/posting', function (req, res) {
    res.send('test posting creation')
})

const Job = require('./models/job').Job
Job.sync()
app.get('/api/jobs', function (req, res) {
    res.send('test job creation')
})

// Serve static Frontend dashboard
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) { // * character allows for internal routing in our frontend
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
