var express = require('express');
var router = express.Router();

const filmesConrollers = require('../controllers/filmesControllers')

/*GET home page. */
router.get('/', filmesConrollers.listaFilmes);

router.get('/sobre', function(req, res, next) {
    res.render('sobre', { title: 'sobre' });
});

router.get('/suporte', function(req, res, next) {
    res.render('suporte', { title: 'suporte' });
});

module.exports = router;