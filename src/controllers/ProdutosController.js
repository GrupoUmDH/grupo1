const ProdutosModel = require('../models/ProdutosModel');
const {validationResult} = require ('express-validator');

module.exports = {
    filmes: (req, res) => {
        const filmes = ProdutosModel.filmes();
        return res.render("filmes", {
            pageName: "filmes",
            Filmes: filmes,
            js: "montarCarrinho",
        });
    },
    series: (req, res) =>{
        const series = ProdutosModel.series();
        return res.render("series", {
            series: series,
            pageName: "series",
            js: "montarCarrinho",
        });
       
    },
    cadastro: (req, res) => {
        const cadastro = ProdutosModel.cadastroProduto();
        return res.render("cadastro", {
            pageName: "cadastroProduto",
            js: "montarCarrinho",
        });
    },
    listar: (req, res) => {
        const tipo = req.query.tipo || 'filmes';
        const categoria = req.query.categoria || 'ação';
        const produtos = ProdutosModel.listar(tipo, categoria);
        console.log(produtos);
        return res.render('categorias', { pageName: 'categorias', produtos, tipo, categoria, js:'categorias'});
    },
    produto: (req, res) => {
        console.log(req.body);
        return res.render('produtos', { pageName: 'produtos', js: 'adicionarAoCarrinho' });
    },
     //criar produto
    createProduto: (req, res) => {
        const { errors } = validationResult(req);
        if (errors.length){
            return res.render('produtos/cadastroProduto' , { errors, produtos: null });
        }
        ProdutosModel.createOne(req)
            res.send(`O produto ${req.body.nome} foi criado com sucesso`)
    }, 
    //procurar produto
    buscaProduto: (req, res) => {
        res.send(ProdutosModel.findOne(req,res))

        // let filme = ProdutosModel.findOne(req);
        // return res.render('produtos', { pageName: 'produtos', js:' ', filme });
       // res.send(ProdutosModel.findOne(req));
    },
    listaProduto: (req, res) => {
        res.send(ProdutosModel.findByParams(req))
    },
    //deletar produto
    deletaProduto: (req, res) => {
        ProdutosModel.deleteOne(req)
        res.send(`O produto de id ${req.body.id} foi deletado com sucesso`)
    },
    // atualização de produto
    atualizaProduto: (req, res) => {
        ProdutosModel.updateOne(req)
        res.send(`O produto de id ${req.body.id} foi atualizado com sucesso`)
    }

}
