module.exports = {
    index: () => {
        return [
            { img: 'credit-card'},
            { img: 'pag-seguro'},
            { img: 'pix'},
            { img: 'boleto'},
        ]
    },
    resumo:()=>{
        return[
            {qtdItens:''},
            {valor: ''},
            {valorDesconto: ''},
            {valorTotal: ''}
        ]
    }
}