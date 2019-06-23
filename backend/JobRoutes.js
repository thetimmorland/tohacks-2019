var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const Job = require('./models/job').Job

// router.get, router.post etc....

router.post('/', (req, res) => {
    // TODO: record that student did work
    Job.create({
        hoursCompleted: req.body.hoursCompleted,
        description: req.body.description,
        postingID: req.body.postingID,
        studentID: req.body.studentID
    })
    res.sendStatus(200);
});

router.get('/', (req, res) => {
    // TODO: return all jobs that match query params
    res.sendStatus(200);
});

router.put('/', (req, res) => {

})

module.exports = router;