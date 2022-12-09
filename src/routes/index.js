var express = require('express');
var router = express.Router();

const filmesControllers = require('../controllers/filmesControllers')


/* GET home page. */

router.get('/', filmesControllers.listaFilmes);

router.get('/sobre', function(req, res, next) {
    res.render('sobre', { pageName: 'sobre' });
});

router.get('/suporte', function(req, res, next) {
    res.render('suporte', { pageName: 'suporte' });
});

module.exports = router;