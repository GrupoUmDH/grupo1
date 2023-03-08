const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.render('painelADM', { pageName: 'painelAdm', js: ''});
});

module.exports = router;