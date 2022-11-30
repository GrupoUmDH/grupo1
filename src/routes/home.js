var express = require('express');
var router = express.Router();

/*GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', { title: 'Lumiere' });

});

router.get('/sobre', function(req, res, next) {
    res.render('sobre-nos', { title: 'Sobre' });

});

router.get('/suporte', function(req, res, next) {
    res.render('suporte', { title: 'Suporte' });

});

module.exports = router;