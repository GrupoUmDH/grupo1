const { json } = require("express");

const itemFilme = document.querySelectorAll('section section .filme-show');

const nomeFilme = document.querySelectorAll('div #nome-filme');
const descriFilme = document.querySelectorAll('div #descri-filme');
const imgFilme = document.querySelectorAll('div #img-filme');
const id = document.getElementById('id').value

itemFilme.forEach( (item, index) => {
    item.addEventListener('click', function(event){
        console.log(item);
        console.log(nomeFilme[index].innerText);

        //sessionStorage.setItem('filme', dados)
        
    })
})