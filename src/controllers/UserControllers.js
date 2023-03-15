let userModel = require("../models/UserModel");

module.exports = {
    index: (req, res, next) => {
        res.render("cadastro", { pageName: "cadastro", js: "cadastro" });
    },
    login: (req, res, next) => {

        let user = req.body.name;
        let pass = req.body.password;

        userModel.user(user, pass);

        //let dados = userModel.user(user, pass);

        //res.send("logado");

        res.render('painel-user', { pageName: 'painel-user', js: 'painel-user' });
    },
    novoUsuario: (req, res, next) => {
        //console.log(req.body);

        userModel.novo(req);

        res.send("novo usuário criado");

    },
    criarForm: (req, res) => {
        return res.render('cadastroUsuario', {erros: [], user: null, pageName: 'cadastroUsuario', js: 'cadastroUsuario'})
    },
    criar:(req,res)=>{
        
    }
};
