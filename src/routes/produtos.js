var express = require('express');
var router = express.Router();
const multer = require('multer')
const path = require('path')

const ProdutosController = require('../controllers/ProdutosController');

router.get('/', ProdutosController.produto);

router.get('/filmes', ProdutosController.filmes);

router.get('/series', ProdutosController.series);

router.get('/cadastroProduto', function(req, res, next) {
    res.render('cadastroProduto', { pageName: 'cadastroProduto', js: 'cadastroProduto' });
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/img/produtos")
    } ,
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    } ,
})

const upload = multer({storage: storage, limits: {fileSize: 10000000}})

router.post('/create',upload.single('imagem'), ProdutosController.createProduto);

// router.post('/criar', ProdutosController.salvarProduto);

// router.get('/sucesso', ProdutosController.sucesso);

router.get('/categorias', ProdutosController.listar);

// router.get('/escolher', ProdutosController.escolher);

module.exports = router;
