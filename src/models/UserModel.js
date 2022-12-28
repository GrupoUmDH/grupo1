const login = require('../database/user.json');

module.exports = {
    user: (user, senha) =>{
        let dados = {};
        
        login.forEach(e => {
            if(user == e.nome) {
                dados = {
                    id : e.id,
                    nome : e.nome,
                    pass : e.password,
                    email: e.email,
                    tipo: e.tipo
                };
            }
            
        })

        return dados;
    }
}