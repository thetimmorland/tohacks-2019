var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const Posting = require('./models/posting').Posting

// router.get, router.post etc....
router.get('/', (req, res) => {
    Posting.findAll()
        .then(results => res.json(results));
});

router.post('/', (req, res) => {
    Posting.create(req.body)
        .then(res.sendStatus(200));
});

router.get('/:post_id', (req, res) => {
    Posting.findOne({
        where: { id: req.params.post_id }
    }).then(model => res.send(model));
});


router.put('/:post_id', (req, res) => {
    Posting.update(req.body, {
                       where: { id: req.params.post_id }
                   }).then(() => res.sendStatus(200));
});

router.delete('/:post_id', (req, res) => {
    Posting.destroy({
        where: { id: req.params.post_id }
    }).then(() => res.sendStatus(200));
});


module.exports = router;
