var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const User = require('../models').User;

router.post('/', function (req, res) {
    let body = req.body;
    if(!body.firstName || !body.lastName || !body.email || !body.password || !body.userType || !body.interests || !body.skills) {
        res.status(400).send("Missing Data");
    }
    User.create({
        firstName: body.firstName
        ,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        userType: body.userType,
        interests: body.interests,
        skills: body.skills,
    }).then(user => {
        res.status(200).send({ id: user.id });
    });
})

router.get('/', function (req, res) {
    User.findAll().then(users => {
        res.status(200).send(users);
    });
});

router.get('/:id', function (req, res) {
    User.findAll({
        where: {
            id: req.params.id
        }
    }).then(users => {
        res.status(200).send(users);
    });
});

router.put('/:id', function (req, res) {
    let body = req.body;
    console.log(req);
    if(!body.firstName || !body.lastName || !body.email || !body.password || !body.userType || !body.interests || !body.skills || !req.params.id) {
        res.status(400).send("Missing Data");
    }

    User.update({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        userType: body.userType,
        interests: body.interests,
        skills: body.skills,
    }, {
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.sendStatus(200);
    });
});

router.delete('/:id', function (req, res) {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.sendStatus(200);
    });
})

// router.get('/api/export', (req, res) => {
//     // TODO: generate pdf
//     res.sendStatus(200);
// });

module.exports = router;
