const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const Volunteer = require('../models').Volunteer;

router.route('/')
  .post((req, res) => {
    Volunteer.create(req.body)
      .then(volunteer => res.status(200).send({ id: volunteer.id }))
      .catch(error => res.status(400).send(error));
  })
  .get((req, res) => {
    Volunteer.findAll()
      .then(volunteers => res.status(200).send(volunteers))
      .catch(error => res.status(400).send(error));
  });

router.route('/:id')
  .get((req, res) => {
    Volunteer.findOne({ where: { id: req.params.id } })
      .then(user => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  })
  .put((req, res) => {
    Volunteer.update(req.body, { where: { id: req.params.id } })
      .then(res.sendStatus(200))
      .catch(error => res.status(400).send(error));
  })
  .delete((req, res) => {
    Volunteer.destroy({ where: { id: req.params.id }})
      .then(() => res.sendStatus(200))
      .catch(error => res.status(400).send(error));
  });

module.exports = router;
