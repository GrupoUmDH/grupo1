let itens = localStorage.getItem('carrinho');

let qtdItem = document.getElementById('qtd-item');

let data = JSON.parse(itens);

console.log(data.length);
//qtdItem.innerText = data.length()