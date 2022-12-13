let itens = localStorage.getItem('carrinho');

let qtdItem = document.getElementById('qtd-item');

console.log(itens.length());
qtdItem.innerText = itens.length()
