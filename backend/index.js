const express = require('express')
const path = require('path')
const app = express()
const port = 8000


// API ENDPOINTS HERE (always lead route with API)
app.get('/api', function (req, res) {
    res.send('Hello World!')
})


// Serve static Frontend dashboard
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) { // * char allows for internal routing in our frontend
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))