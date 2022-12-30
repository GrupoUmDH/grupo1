const produtos = require('../database/filmes.json');

module.exports = {
    index: () => {
        return produtos;
    },
   

    // viewProduto:(req, res) => {
    //    return res.render('cadastroProduto')
    // },
    // salvarProduto:(req, res) => {
    //     let{check, categoria, classificacao, valor, imagem} = req.body
    //     res.redirect('/cadastroProduto/sucesso')
    // },
    // sucesso:(req,res) =>{
    //    res.render('sucesso')
    // }

}
