var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const User = require('./models/user').User

// router.get, router.post etc....

router.post('/api/jobs', (req, res) => {
    // TODO: record that student did work
    res.sendStatus(200);
});

router.get('/api/jobs', (req, res) => {
    // TODO: return all jobs that match query params
    res.sendStatus(200);
});

module.exports = router;