var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const Job = require('../models').Job

// router.get, router.post etc....

router.post('/', (req, res) => {
    // TODO: record that student did work
    Job.create({
        hoursCompleted: req.body.hoursCompleted,
        description: req.body.description,
        postingID: req.body.postingID,
        studentID: req.body.studentID
    }).then(job => {
        res.sendStatus(204) // 204 created
    })
});

router.get('/', (req, res) => { // return list of all jobs for all students
    Job.findAll().then(jobs => {
        res.send(jobs).status(200)
    })
});

router.get('/:id', (req, res) => { // query job by its id
    Job.findAll({
        where: {
            id: req.params.id
        }
    }).then(job => {
        res.send(job).status(200)
    })
});

router.put('/:id', (req, res) => {
    Job.update({
        hoursCompleted: req.body.hoursCompleted,
        description: req.body.description,
        postingID: req.body.postingID,
        studentID: req.body.studentID
    }, {
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.sendStatus(204)
    })
})

router.delete('/:id', (req, res) => {
    Job.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.sendStatus(204)
    })
})

module.exports = router;
