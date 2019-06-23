const express = require('express')
const app = express();
const path = require('path');
const port = 8000

const dotenv = require('dotenv')
if (!process.env.DB_USER || !process.env.DB_PASS) {
    dotenv.config()
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/auth', auth);

app.post('/api/users', function (req, res) {
    // create a user

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
app.get('/api/users', function (req, res) {
    User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        res.status(200).send(user);
    });
});

app.put('api/users', function (req, res) {
    // TODO: update user data
    res.sendStatus(200);
});

app.delete('api/users', function (req, res) {
    // TODO: delete user data (and from relations!)
    res.sendStatus(200);
})

// Login Endpoint
app.post('/api/login', function (req, res) {

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

app.post('/api/postings', (req, res) => {
    // TODO: create a job posting
    res.sendStatus(200);
});

app.post('/api/jobs', (req, res) => {
    // TODO: record that student did work
    res.sendStatus(200);
});

app.get('/api/jobs', (req, res) => {
    // TODO: return all jobs that match query params
    res.sendStatus(200);
});

// app.get('/api/export', (req, res) => {
//     // TODO: generate pdf
//     res.sendStatus(200);
// });

// import user only after env variables have been enabled
const User = require('./models/user').User

// API ENDPOINTS HERE (always lead route with API)
app.get('/api/register', function (req, res) { // create a fake user example
    User.create({
        firstName: 'Timbo2',
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

// Serve static Frontend dashboard
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) { // * character allows for internal routing in our frontend
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
