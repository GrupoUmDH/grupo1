let btnAddCarrinho = document.getElementById('add-carrinho')
const nomeFilme = document.getElementById('nome-filme')
const descrFilme = document.querySelector('#descri-filme>p')
const coverFilme = document.querySelector('.cover-filme')
const classificacao = document.querySelector('.classificacao>img')
const precoAlugar = document.querySelector('.alugar>p')
const precoComprar = document.querySelector('.comprar>p')
const id = document.getElementById('id').value
let carrinho = []

const filme = {
    id,
    nome: nomeFilme.innerText,
    descricao: descrFilme.innerText,
    classificacao: classificacao.src,
    precoAlugar: precoAlugar.innerText,
    precoComprar: precoComprar.innerText,
    imagem: coverFilme.src
}

btnAddCarrinho.addEventListener('click', function(){
    
    if(localStorage.getItem('carrinho')==null){
        carrinho.push(filme)
       localStorage.setItem('carrinho', JSON.stringify(carrinho))
    }else{
        carrinho=localStorage.getItem('carrinho')
        carrinho=JSON.parse(carrinho)
        carrinho.push(filme)
        localStorage.setItem('carrinho', JSON.stringify(carrinho))
    }
})
