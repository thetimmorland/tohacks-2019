var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const User = require('./models/user').User

// router.get, router.post etc....

module.exports = router;