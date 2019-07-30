const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const Volunteer = require('../models').Volunteer;

router.route('/')
  .post((req, res) => {
    Volunteer.create(req.body)
      .then(volunteer => res.status(200).send({ id: volunteer.id }));
  })
  .get((req, res) => {
    Volunteer.findAll()
      .then(volunteers => res.status(200).send(volunteers));
  });

router.route('/:id')
  .get((req, res) => {
    Volunteer.findOne({ where: { id: req.params.id } })
      .then(user => res.status(200).send(users));
  })
  .put((req, res) => {
    Volunteer.update(
      req.body,
      { where: { id: req.params.id } }
    ).then(() => res.sendStatus(200));
  })
  .delete((req, res) => {
    Volunteer.destroy({ where: { id: req.params.id }})
      .then(() => res.sendStatus(200));
  });

module.exports = router;
