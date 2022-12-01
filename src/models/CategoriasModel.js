const { application } = require("express")

module.exports = {
    index: () => {
        return [
            {
                categoria: 'acao',
                imagem: 'alertaV ermelho',
                nome: 'Alerta Vermelho',
                valor_aluguel: 'R$ 19,90',
                valor_compra: 'R$ 59,90',
            },
            {
                categoria: 'acao',
                imagem: 'alertavermelho',
                nome: 'Alerta Vermelho',
                valor_aluguel: 'R$ 19,90',
                valor_compra: 'R$ 59,90',
            },



        ]
    }
}