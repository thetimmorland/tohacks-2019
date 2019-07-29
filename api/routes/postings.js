var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const Posting = require('../models').Posting;

router.route('/')
  .post((req, res) => {
    Posting.create(req.body)
      .then(posting => res.status(200).send({ id: posting.id }));
  })
  .get((req, res) => {
    Posting.findAll()
      .then(postings => res.status(200).send(postings));
  });

router.route('/:id')
  .get((req, res) => {
    Posting.findOne({ where: { id: req.params.id }})
      .then(posting => res.status(200).send(posting));
  })
  .put((req, res) => {
    Posting.update(req.body, { where: { id: req.params.id } })
      .then(() => res.sendStatus(200));
  })
  .delete((req, res) => {
    Posting.destroy({ where: { id: req.params.id } })
      .then(() => res.sendStatus(200));
  });

module.exports = router;
