var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('cadastro', { title: 'cadastro' });
});

router.get('/painel-user', function(req, res, next) {
  res.render('painel-user', { title: 'painel-user' });
});



module.exports = router;
