const ProdutosModel = require('../models/ProdutosModel');

module.exports = {
    filmes: (req, res) => {
        const filmes = ProdutosModel.filmes();
        return res.render('filmes', { pageName: 'filmes', Filmes:filmes, js:'' })
    },
    series: (req, res) =>{
        const series = ProdutosModel.series();
        return res.render('series', { series: series, pageName: 'series' , js:''})
       
    },
    cadastro: (req, res) => {
        const cadastro = ProdutosModel.cadastroProduto();
        return res.render('cadastro', { pageName: 'cadastroProduto', js:'' });
    },
    listar: (req, res) => {
        const tipo = req.query.tipo || 'filmes';
        const categoria = req.query.categoria || 'ação';
        const produtos = ProdutosModel.listar(tipo, categoria);
        console.log(produtos);
        return res.render('categorias', { pageName: 'categorias', produtos, tipo, categoria, js:'categorias'});
    },
    produto: (req, res) => {
        const filme = ProdutosModel.filmes();
        return res.render('produtos', { pageName: 'produtos', Filme: filme , js: 'adicionarAoCarrinho' });
    },
     //criar produto
    createProduto: (req, res) => {
        if (!req.file) {
            return res.send("Por favor, adicione uma imagem")
        }
        ProdutosModel.createOne(req)
            res.send(`O produto ${req.body.nome} foi criado com sucesso`)
    }, 
    //procurar produto
    buscaProduto: (req, res) => {
        let filme = ProdutosModel.findOne(req);
        return res.render('cadastroProduto', { pageName: 'cadastroProduto', js:'cadastroProduto', filme });
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
