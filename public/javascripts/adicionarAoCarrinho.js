const btnComprar = document.getElementById('btn-comprar');
const btnAlugar = document.getElementById("btn-alugar");

const div_popUp = document.querySelector('div.pop-Up');

// CONTROLE DE POP-UP
div_popUp.style.display = "none";

const nomeFilme = document.getElementById('nome-filme');
const descrFilme = document.querySelector('#descri-filme>p');
const coverFilme = document.querySelector('.cover-filme')
const classificacao = document.querySelector('.classificacao>img');
const valor = document.querySelector(".comprar>p");
const bkFilme = document.querySelector('#bk-filme');
let id = document.getElementById('id').value ;

let carrinho = []
let produto = sessionStorage.getItem('filme');
let data = JSON.parse(produto);

id = (JSON.parse(localStorage.carrinho).length) + 1 ;

nomeFilme.innerText = data[0].nome;
descrFilme.innerText = data[0].descri_Filme;
classificacao.src = data[0].categoria;
valor.innerText = data[0].valor;
coverFilme.src = data[0].background;
bkFilme.src = data[0].img;

const filme = {
    id,
    nome: nomeFilme.innerText,
    descricao: descrFilme.innerText,
    classificacao: classificacao.src,
    valor: valor.innerText,
    imagem: coverFilme.src,
};

btnComprar.addEventListener('click', () => {
    //console.log("COMPRANDO");
    carrinhoLocal();
});

const carrinhoLocal = () => {

    div_popUp.style.display = "flex"; //chamo o pop-up

    //console.log(id);

    if (localStorage.getItem("carrinho") == null) {
        carrinho.push(filme);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    } else {
        carrinho = JSON.parse(localStorage.getItem("carrinho"));
        //carrinho=JSON.parse(carrinho)

        // verificar se o item ja esiste no carrinho
        carrinho = carrinho.filter((element) => 
            element.nome != nomeFilme.innerText
        );
        //console.log(carrinho);

        carrinho.push(filme);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
}