
if (localStorage.getItem("carrinho") == null) {
    localStorage.setItem("carrinho", JSON.stringify([]));
}

let qdt_itens = document.getElementById("qtd-item");
let i = JSON.parse(localStorage.carrinho);

//console.log(i.length);

if(!i.length) {
    qdt_itens.innerText = 0;
} else {
    qdt_itens.innerText = i.length;
}

