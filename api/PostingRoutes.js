var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const Posting = require('./models/posting').Posting
const Levenshtein = require('levenshtein');

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
    Posting.findAll().then(postings => postings.sort((textA,textB) => {
            let as_ = (textA.title + textA.description).split(" ");
            let bs = (textB.title + textB.description).split(" ");
            
            return as_.map(a => bs.map(b =>
                new Levenshtein(a, req.params.query).distance
                    - new Levenshtein(b, req.params.query).distance))
                    .reduce((acc,curr) => acc<curr ? acc : curr, 0)
                .reduce((acc,curr) => acc<curr ? acc : curr, 0)
        })
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
