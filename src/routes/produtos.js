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
//criar produto
router.post('/create',upload.single('imagem'), ProdutosController.createProduto);
//buscar produto
router.get('/search', ProdutosController.buscaProduto);
// deletar produto
router.delete('/remove', ProdutosController.deletaProduto);
// atualização de produto
router.put('/edit', ProdutosController.atualizaProduto);


router.get('/categorias', ProdutosController.listar);

// router.get('/escolher', ProdutosController.escolher);

module.exports = router;
