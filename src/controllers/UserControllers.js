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

        res.send("logado");

        //res.render('painel-user', { pageName: 'painel-user', js: 'painel-user' , User: dados});
    },
    novoUsuario: (req, res, next) => {
        //console.log(req.body);

        userModel.novo(req);

        res.send("novo usuário criado");
        
    }
};
