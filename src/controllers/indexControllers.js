const ProdutosModel = require('../models/ProdutosModel');

const search = require("../request/search");

module.exports = {
    index: (req, res) => {
        /*
        // faço uma requisição na api mostranho os filmes/series populares
        */

        try {
            
        } catch (error) {
            
        }

        const filmes = ProdutosModel.filmes();
        const series = ProdutosModel.series();
        //res.render('VIEW', {OBJETO })
        //console.log(req.session.name);
        return res.render("index", {
            listaFilmes: filmes,
            listaSeries: series,
            pageName: "home",
            js: "index",
        });
    },
    loginForm: (req,res)=>{
        return res.render('cadastro', {erros: [], user: null, pageName: 'cadastro', js: ''});
    }
}
