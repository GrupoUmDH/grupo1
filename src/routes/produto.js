var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('produto', { pageName: 'produto', js:"adicionarAoCarrinho"});
})

module.exports = router;