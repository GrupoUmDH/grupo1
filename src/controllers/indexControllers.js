const { Filme } = require('../../models');
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
            const filmes = await Filme.findAll(
                { where:{ tipo: "filme" }, limit: 6  }
            );

            const series = await Filme.findAll(
                { where:{ tipo: "serie" }, limit: 6  }
            );

            return res.render("index", {
                filmes, series,
                pageName: "home",
                js: "index",
                erro: [],
            });
        
        } catch (error) {
            console.log(error);
            res.send("Erro de servidor..");
        }

    },

    loginForm: (req,res)=>{
        return res.render('cadastro', {erros: [], user: null, pageName: 'cadastro', js: ''});
    }
}
