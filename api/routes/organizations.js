const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const Organization = require('../models').Organization;

router.route('/')
  .post((req, res) => {
    Organization.create(req.body)
      .then(org => res.status(200).send({ id: org.id }))
      .catch(error => res.status(400).send(error));
  })
  .get((req, res) => {
    Organization.findAll()
      .then(orgs => res.status(200).send(orgs))
      .catch(error => res.status(400).send(error));
  });

router.route('/:id')
  .get((req, res) => {
    Organization.findOne({ where: { id: req.params.id } })
      .then(org => res.status(200).send(org))
      .catch(error => res.status(400).send(error));
  })
  .put((req, res) => {
    Organization.update(req.body, { where: { id: req.params.id } })
      .then(res.sendStatus(200))
      .catch(error => res.status(400).send(error));
  })
  .delete((req, res) => {
    Organization.destroy({ where: { id: req.params.id }})
      .then(res.sendStatus(200))
      .catch(error => res.status(400).send(error));
  });

module.exports = router;
