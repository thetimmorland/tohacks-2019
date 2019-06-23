const express = require('express')
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const User = require('./User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const port = 8000
const dotenv = require('dotenv')
const runQuery = require('./db')
const auth = require('./AuthController')

if (!process.env.DB_USER || !process.env.DB_PASS) {
    dotenv.config()
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/auth', auth);

app.get('/loginPage', function(req, res) {
  res.sendFile(path.join("../frontend/", 'build', 'index.html'));
});

// registration endpoint
app.post('/register', function (req, res) {

    let hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        type: req.body.type,
        payments_assigned : [],
        password: hashedPassword
    },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem registering the user.")

            // create a token
            let token = jwt.sign({ id: user._id }, process.env.secret, {
                expiresIn: 86400 // expires in 24 hours
            });

            res.status(200).send({ auth: true, token: token });
        });
});

// returns user info when their token is enclosed in the header of the request
app.get('/me', function (req, res) {

    // find token in db

    // this is bad because we could ask for a different user
    User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        res.status(200).send(user);
    });
});

// Login Endpoint
app.post('/login', function (req, res) {

    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        //console.log(user);
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        //console.log(passwordIsValid);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        let token = jwt.sign({ id: user._id }, process.env.secret, {
            expiresIn: 86400 // expires in 24 hours
        });

        res.status(200).send({
                auth: true,
                token: token,
                first_name: user.first_name,
                last_name: user.last_name,
                type: user.type,
                email: user.email,
                payments_assigned: user.payments_assigned,
                id: user.id
            });
    });

});

// Logout that nullifies token given in login endpoint
app.get('/logout', function (req, res) {
    res.status(200).send({ auth: false, token: null });
});
// ^ waaaaat

app.get('/create', (req, res) => {
    // TODO: create a job posting
    res.status(200);
});

app.get('/signup', (req, res) => {
    // TODO: sign up student for a job posting
    res.status(200);
});

app.get('/verfiywork', (req, res) => {
    // TODO: record that student did work
    res.status(200);
});

app.get('/export', (req, res) => {
    // TODO: generate pdf
    res.status(200);
});

// API ENDPOINTS HERE (always lead route with API)
app.get('/api', function (req, res) {
    res.send('Hello World!')
})

// Serve static Frontend dashboard
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) { // * character allows for internal routing in our frontend
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`VolunteerMe listening on port ${port}!`))