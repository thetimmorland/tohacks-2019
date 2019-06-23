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

router.get('/search/:query', (req, res) => {
    console.log("here")
    console.log(req.params.query)
    Posting.findAll().then(postings => postings.sort((a,b) =>
            (!a.title || !b.title) ? 1000 :
                new Levenshtein(a.title, req.params.query).distance
                    - new Levenshtein(b.title, req.params.query).distance)
        .slice(0, 10))
    .then(postings => res.status(200).send(postings));
})

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
