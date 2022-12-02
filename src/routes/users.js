var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/painel-user', function(req, res, next) {
  res.render('painel-user', { title: 'painel-user' });
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'cadastro' });
});

module.exports = router;
