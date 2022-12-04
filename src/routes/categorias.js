var express = require('express');
var router = express.Router();

const CategoriasController = require('../controllers/categoriasController')

router.get('/', CategoriasController.categorias);

module.exports = router;

