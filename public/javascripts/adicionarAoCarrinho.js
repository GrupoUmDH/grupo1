const btnAddCarrinho = document.getElementById('btn-comprar');

const div_popUp = document.querySelector('div.pop-Up');

// CONTROLE DE POP-UP
div_popUp.style.display = "none";

const nomeFilme = document.getElementById('nome-filme');
const descrFilme = document.querySelector('#descri-filme>p');
const coverFilme = document.querySelector('.cover-filme')
const classificacao = document.querySelector('.classificacao>img');
const precoAlugar = document.querySelector('.alugar>p');
const precoComprar = document.querySelector('.comprar>p');
const bkFilme = document.querySelector('#bk-filme');
const id = document.getElementById('id').value ;

let carrinho = []
let produto = sessionStorage.getItem('carrinho');
let data = JSON.parse(produto);

nomeFilme.innerText = data[0].nome;
descrFilme.innerText = data[0].descri_Filme;
classificacao.src = data[0].categoria;
precoAlugar.innerText = data[0].aluga;
precoComprar.innerText = data[0].compra_Filme;
coverFilme.src = data[0].background;
bkFilme.src = data[0].img;

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

    div_popUp.style.display = "flex";
    
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