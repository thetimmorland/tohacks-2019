var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const User = require('./models/user').User

// returns user info when their token is enclosed in the header of the request
router.get('/api/users', function (req, res) {
    User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        res.status(200).send(user);
    });
});

router.put('api/users', function (req, res) {
    // TODO: update user data
    res.sendStatus(200);
});

router.delete('api/users', function (req, res) {
    // TODO: delete user data (and from relations!)
    res.sendStatus(200);
})

// router.get('/api/export', (req, res) => {
//     // TODO: generate pdf
//     res.sendStatus(200);
// });

module.exports = router;