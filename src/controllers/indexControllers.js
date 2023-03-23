const ProdutosModel = require('../models/ProdutosModel');

const search = require("../request/search");

module.exports = {
    index: async (req, res) => {
        /*
        // faço uma requisição na api mostranho os filmes/series populares
        */

        try {

            let topFilmes = [];
            let topSeries = [];

            search.getTopFilmes().then((response) => {
                topFilmes = Jresponse.data.results;
                console.log(topFilmes);
            });

            search.getTopSeries().then((response) => {
                topSeries = response.data.results;
                //console.log(topSeries);
            });

            return res.render("index", {
                pageName: "home",
                js: "index",
            });

        } catch (error) {
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
        }

        
    },

    loginForm: (req,res)=>{
        return res.render('cadastro', {erros: [], user: null, pageName: 'cadastro', js: ''});
    }
}
