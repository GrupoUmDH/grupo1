const login = require('../database/user.json');

module.exports = {
    user: (user, senha) =>{
        let dados = {};
        
        login.forEach(e => {
            if(user == e.nome) {
                dados = {
                    id : e.id,
                    nome : e.nome,
                    pass : e.password
                };
                console.log(dados);
            } else if (!user) {
                console.log("usuario vazio!!!")
            } else {
                console.log("faça cadastro.");
            }
            
        })
        
        return dados;
    }
}