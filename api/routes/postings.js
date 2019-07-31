const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const Posting = require('../models').Posting;

router.route('/')
  .post((req, res) => {
    Posting.create(req.body)
      .then(posting => res.status(200).send({ id: posting.id }))
      .catch(error => res.status(400).send(error));
  })
  .get((req, res) => {
    Posting.findAll()
      .then(postings => res.status(200).send(postings))
      .catch(error => res.status(400).send(error));
  });

router.route('/:id')
  .get((req, res) => {
    Posting.findOne({ where: { id: req.params.id }})
      .then(posting => res.status(200).send(posting))
      .catch(error => res.status(400).send(error));
  })
  .put((req, res) => {
    Posting.update(req.body, { where: { id: req.params.id } })
      .then(res.sendStatus(200))
      .catch(error => res.status(400).send(error));
  })
  .delete((req, res) => {
    Posting.destroy({ where: { id: req.params.id } })
      .then(res.sendStatus(200))
      .catch(error => res.status(400).send(error));
  });

module.exports = router;
