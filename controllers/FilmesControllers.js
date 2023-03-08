const { Categorias, Classificacao, Filme } = require('../models');
const Op = require('sequelize');
const { validationResult } = require('express-validator');
const path = require('path');


module.exports = {
    index: async (req, res) => {
        const filmes = await Filme.findAll({
            include: [
                {
                    model: Classificacao,
                    as: "indicacao",
                    require: true,
                },
            ],
        });

        res.render("teste", { pageName: "filmes", js: "filmes", filmes });
    },

    buscar: async (req, res) => {
        const categorias = await Categorias.findAll();
        const classificacoes = await Classificacao.findAll();
        const id = req.query.idRead;
        const filmes = await Filme.findOne({
            where: { id: id },
        });
        console.log(filmes);

        res.render("teste", { pageName: "filmes", js: "filmes", categorias, classificacoes, filmes: [filmes] });
    },

    criar: async (req, res) => {
        /*
const id = req.query.idRead;
const filmes = await Filme.findOne({
    where: { id: id },
});
console.log(req);

res.send("teste" + req.query);
},

    deletaProduto: (req, res) => {
        const { errors } = validationResult(req);
        console.log("errors", errors)

        if (errors.length) {
            const errosFormatados = {

            }
            errors.forEach(erro =>
                errosFormatados[erro.param] = erro.msg
            );
            return res.render('cadastroProduto', { pageName: 'cadastroProduto', js: 'montarCarrinho', errors: errosFormatados, produtos: null });
        }

        Filme.destroy({where: {
            id: req.body.idDelete
        }
        
        })
        res.send(`O produto de id ${req.body.idDelete} foi deletado com sucesso`)
    },

    categoriaclassificacaoFilme: async (req, res) => {
        const categorias = await Categorias.findAll({
            order: ["nome"],
        });
        const classificacao = await Classificacao.findAll({
            order: ["id"],
        });

        console.log(classificacao)
        console.log(categorias)


        res.render("cadastroProduto", {
            pageName: "cadastroProduto",
            errors: [],
            js: "cadastroProduto",
            categorias,
            classificacao,
        });
    },

form: async (req, res) => {
let filme;
const { id } = req.params;

if (id) filme = await Filme.findByPk(id);

const categoria = await Categorias.findAll({

});

const classificacao = await Classificacao.findAll({
    order: ["nome"],
});

//console.log(categoria);

res.render("testeADD", {
    pageName: "addFilme",
    js: "addFilme",
    filme,
    categoria,
    classificacao,
});
},

    createProduto: async (req, res) => {

        console.log(req.body);

        const { errors } = validationResult(req);
        //console.log("errors", errors)

        if (errors.length) {
            const errosFormatados = {

            }
            errors.forEach(erro =>
                errosFormatados[erro.param] = erro.msg
            );

            return res.render('cadastroProduto', { pageName: 'cadastroProduto', js: 'montarCarrinho', errors: errosFormatados, produtos: null });
        } 
        const params = req.body;
        const filmes = await Filme.create({
            nome: params.nomeCreate,
            imagem: path.parse(req.files.imagemCreate[0].filename).name,
            background: path.parse(req.files.backgroundCreate[0].filename).name,
            valor: params.valorCreate,
            tipo: params.tipoCreate,
            categorias_id: params.categoriaCreate,
            classificacoes_id: params.classificacoesCreate,
            descricao: params.descricaoCreate
        });
        console.log(req);
        res.render("teste", { pageName: "filmes", js:"filmes", categorias:params.categoriaCreate, classificacoes:1, filmes:[filmes] });
        
    },

    editar: async (req, res) => {

},

addFilme: async (req, res) => {
 
console.log(req);

const obj = req.body;


const { novofilme } = JSON.stringify(obj);

Object.setPrototypeOf(obj, Object.prototype);




await Filme.create({ novofilme });

        console.log(obj);

        //res.redirect('/produtos/teste');
    },

    atualizaProduto: async (req, res) => {

        console.log(req.body);

        const { errors } = validationResult(req);
        //console.log("errors", errors)

        if (errors.length) {
            const errosFormatados = {

            }
            errors.forEach(erro =>
                errosFormatados[erro.param] = erro.msg
            );

            return res.render('cadastroProduto', { pageName: 'cadastroProduto', js: 'montarCarrinho', errors: errosFormatados, produtos: null });
        } 
        const params = req.body;
        console.log(params)
        const filmes = await Filme.update({
            nome: params.nomeUpdate,
            imagem: "Alterar posterior", //params.imagemCreate
            background: "Alterar posterior", //params.backgroundCreate
            valor: params.valorUpdate,
            tipo: params.tipoUpdate,
            categorias_id: params.categoriaUpdate,
            classificacoes_id: 1, //params.classificacoesCreate
            descricao: params.descricaoUpdate
        },
            {
                where: { id:params.idUpdate } 
            }
           
        );
        console.log(req);
        res.render("teste", { pageName: "filmes", js:"filmes", categorias:params.categoriaCreate, classificacoes:1, filmes:[req.params] });
        
    },

};

res.redirect('/produtos/teste');
},
};
*/
    },
};
