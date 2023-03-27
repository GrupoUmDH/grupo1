const ProdutosModel = require('../models/ProdutosModel');

const api = require("../request/search");

const modelaFilmes = (apiResposta) =>{
    let saida = [];
    apiResposta.forEach((itens, i) => {
        saida[i] = {
            nome: itens.title,
            descricao: itens.overview,
            background: itens.poster_path,
            imagem: itens.backdrop_path,
        };
    });

    return saida;

}

module.exports = {
    index: async (req, res) => {

        try {
            api.getTopFilmes()
                .then((response) => {
                    let configFIlmes = modelaFilmes(response.data.results);
                    //console.log(configFIlmes)
                    api.getTopSeries().then((resposta) => {
                        let configSeries = modelaFilmes(resposta.data.results);

                        return res.render("index", {
                            listaFilmes: configFIlmes,
                            listaSeries: configSeries,
                            pageName: "home",
                            js: "index",
                        });
                    }).catch((error) => console.log(error));
                    
                })
                .catch((error) => console.log(error));
        } catch (error) {
            const filmes = ProdutosModel.filme();
            const series = ProdutosModel.series();

            return res.render("index", {
                listaFilmes: configFIlmes,
                listaSeries: configSeries,
                pageName: "home",
                js: "index",
            });
        }

    },

    loginForm: (req,res)=>{
        return res.render('cadastro', {erros: [], user: null, pageName: 'cadastro', js: ''});
    }
}
