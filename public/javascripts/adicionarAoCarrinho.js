const btnComprar = document.getElementById('btn-comprar');

const div_popUp = document.querySelector('div.pop-Up');

//PAGINA FILMES E SERIES
const refer = document.querySelectorAll("section div.filme-show a");

// CONTROLE DE POP-UP
div_popUp.style.display = "none";

const nomeFilme = document.getElementById('nome-filme');
let id = document.getElementById('id').value ;

let produto = document.querySelector('input#itensCarrinho');

let carrinho = []

const filme = {
    id,
    nome: nomeFilme.innerText,
}

btnComprar.addEventListener('click', () => {
    carrinhoLocal();
});

const carrinhoLocal = () => {

    div_popUp.style.display = "flex"; //chamo o pop-up

    if (localStorage.getItem("carrinho") == null) {
        carrinho.push(filme);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    } else {
        carrinho = JSON.parse(localStorage.getItem("carrinho"));

        // verificar se o item ja esiste no carrinho
        carrinho = carrinho.filter((element) => 
            element.nome != nomeFilme.innerText
        );

        carrinho.push(filme);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }

}
