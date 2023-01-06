/*
const form = document.querySelector('main .content-form form')
const inputList = document.querySelectorAll(`main .content-form input:not(.check)`)
const nomeProd = document.querySelector("input[name='nome-do-produto']")
const descricaoProd = document.querySelector("input[name='descricao-do-produto']")
const classificacao = document.querySelector("input[name='classificacao']")
const aluguel = document.querySelector("input[name='aluguel']")
const compra = document.querySelector("input[name='compra']")
const categoria = document.querySelector("input[name='categoria']")

form.addEventListener('submit', function(event){   

    inputList.forEach(input => {
        if (!input.value){
            event.preventDefault();
            document.querySelector('.err-'+ input.name).classList.remove('invisible')
        } else{
            document.querySelector('.err-'+ input.name).classList.add('invisible')
        }
    })
});
*/


let conteudo = document.querySelector('div.pop-up')
const pesquisar = document.getElementById('bt-pesquisa')
pesquisar.addEventListener('click', () => {
    console.log('testando');
    conteudo.style.display = 'block';
   // conteudo.innerHTML += html;

})




