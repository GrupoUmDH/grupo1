const login = require('../database/user.json');
const fs = require('fs');
const path = require('path');

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
    }, 
    novo: (dados) => {
        let novoUser = {
            id: login[login.length - 1].id + 1,
            nome: dados.body.name,
            password: dados.body.password,
            email: dados.body.email,
            tipo: login.tipo,
        };

        // VERIFICAR SE ESISTE USUÁRIO COM O MESMO E-MAIL ...
        
        login.push(novoUser);

        fs.writeFileSync(
            path.join(__dirname, "../database/user.json"),
            JSON.stringify(login, null, 4)
        );
        
    }
}