const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const Log = require('../models').Log;

router.route('/')
  .post((req, res) => {
    Log.create(req.body)
      .then(log => res.status(200).send({ id: log.id }))
      .catch(error => res.status(400).send(error));
  })
  .get((req, res) => {
    Log.findAll()
      .then(logs => res.status(200).send(log))
      .catch(error => res.status(400).send(error));
  });

router.route('/:id')
  .get((req, res) => {
    Log.findOne({ where: { id: req.params.id } })
      .then(user => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  })
  .put((req, res) => {
    Log.update(req.body, { where: { id: req.params.id } })
      .then(res.sendStatus(200))
      .catch(error => res.status(400).send(error));
  })
  .delete((req, res) => {
    Log.destroy({ where: { id: req.params.id }})
      .then(res.sendStatus(200))
      .catch(error => res.status(400).send(error));
  });

module.exports = router;
