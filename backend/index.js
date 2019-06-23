const express = require('express')
var cors = require('cors');
const app = express();
//app.use(cors)
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

// Serve static Frontend dashboard
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) { // * character allows for internal routing in our frontend
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
