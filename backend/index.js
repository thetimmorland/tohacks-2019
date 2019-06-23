const express = require('express')
const path = require('path')
const app = express()
const port = 8000
const dotenv = require('dotenv')
const mysql = require('mysql')
const dbutil = require('./db')

if (!process.env.DB_USER || !process.env.DB_PASS) {
    dotenv.config()
}

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