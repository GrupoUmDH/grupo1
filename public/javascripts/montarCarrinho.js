// const btnMontarCarrinho = document.getElementById('btnMontarCarrinho')
// btnMontarCarrinho.addEventListener('click',function(){
//     const parametros = new URLSearchParams(JSON.parse(localStorage.getItem('carrinho')))
//     let url = new URL('http://localhost:3000/carrinho')
//     url.search = parametros.toString()
//     fetch(url, {
//         method: "GET", 
//         mode: "cors",
//         headers: {
//             'Content-Type': 'application/json'
//         },

//     })
// })

const formMontarCarrinho = document.getElementById('montarCarrinho')
formMontarCarrinho.addEventListener('submit', function (event) {
    event.preventDefault()
    const itensCarrinho = document.querySelector('[name="itensCarrinho"]')
    itensCarrinho.value = localStorage.getItem("carrinho")
    console.log(itensCarrinho)
    this.submit()
})

//console.log(JSON.parse(localStorage.getItem('carrinho')));