var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');

const ProdutosController = require('../controllers/ProdutosController');

router.get('/', ProdutosController.produto);

router.get('/filmes', ProdutosController.filmes);
router.get('/series', ProdutosController.series);
router.get('/categorias', ProdutosController.listar);
router.get('/cadastroProduto', function(req, res, next) {
    res.render('cadastroProduto', { pageName: 'cadastroProduto', js: 'cadastroProduto' });
});

//implementar multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder =path.join('public/img/filmes')
        cb(null, folder)
    } ,
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    } ,
});
const upload = multer({storage: storage, limits: {fileSize: 10000000}});

router.get('/produtos/:id/:nome?', ProdutosController.listaProduto)

//criar produto
router.post('/create',upload.single('background'), ProdutosController.createProduto);

//buscar produto
router.get('/search', ProdutosController.buscaProduto);
 
// deletar produto
router.delete('/remove', ProdutosController.deletaProduto);

// atualiza produto
router.put('/edit', ProdutosController.atualizaProduto);


module.exports = router;
