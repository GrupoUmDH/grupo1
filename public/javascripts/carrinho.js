const sectionFilme = document.querySelectorAll("section.item");
const filmesNoCariinho = document.querySelector("form input#itensCarrinho");
const removeBtns = document.querySelectorAll("main form#montarCarrinho");

const popUp = document.querySelector("div.pop-up");
const popUp_sair = document.querySelector("div.pop-up span button");

const navItem = document.querySelectorAll('li[class="nav-item"]');
const contentItem = document.querySelectorAll('div[class="content-item"]');

const numeroCard = document.querySelector('input[name="numero_cartao"]');
const dataCard = document.querySelector('input[name="vencimento"]');

const metodoPagamento = document.querySelector('input[name="metodo_pagamento"]');

const formCartao = document.querySelector('form[id=finalizaCompra]');
const inputCard = document.querySelectorAll('input[name="selectCartao"]');

const popUp_login = document.querySelector('div [id="aviso"]');

const popUpDados = document.querySelector('div.popUp-dados');

if(numeroCard != null || dataCard != null){
    numeroCard.addEventListener("keyup", () => {
        let value = numeroCard.value.replace(/[^0-9]/g, "").replace(/^([\d]{4})([\d]{4})([\d]{4})?([\d]{4})/, "$1-$2-$3-$4");
        numeroCard.value = value;
    });

    dataCard.addEventListener("keyup", () => {
        let value = dataCard.value.replace(/[^0-9]/g, "").replace(/([\d]{2})?([\d]{2})/,"$1/$2");
        dataCard.value = value;
    });
};

contentItem.forEach((element, i) => {
    element.style.display = "none";

    navItem[0].style.borderBottom = "3px solid var(--cores-chaves)";
    contentItem[0].style.display = "block";

    metodoPagamento.value = 'cartao';

})

navItem.forEach((element, i) => {
    element.addEventListener('click', (event)=>{
        //console.log(i);
        for(let a = 2; a >= 0; a--){
            if(a == i){
                navItem[a].style.borderBottom = "3px solid var(--cores-chaves)";
                contentItem[a].style.display = "block";

                if(a == 0) {
                    metodoPagamento.value = 'cartão';
                } else if (a == 1) {
                    metodoPagamento.value = 'pix';
                } else {
                    metodoPagamento.value = 'boleto';
                }
            } else {
                navItem[a].style.borderBottom = "0";
                contentItem[a].style.display = "none";
            }
        };

        
    });
});

//SAIR DO POP-UP
popUp_sair.addEventListener("click", (event) => {
    popUp.style.display = "none";
});

removeBtns.forEach((btn, index) => {
    btn.addEventListener("submit", function (event) {
        event.preventDefault();

        let carrinho = JSON.parse(localStorage.getItem("carrinho"));
        carrinho.splice(index, 1);
        //console.log(carrinho);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        //delCarrinho[index].value = carrinho;
        filmesNoCariinho.value = JSON.parse(carrinho);

        sectionFilme[index].remove();

        this.submit();
    });
});



