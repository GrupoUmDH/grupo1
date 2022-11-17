

   
const form = document.querySelector('main .content-form form')
const inputList = document.querySelectorAll(`main .content-1 input:not(.check)`)
const cep = document.querySelector("input[name='codigo-postal']")
const endereco = document.querySelector("input[name='endereco']")
const cidade = document.querySelector("input[name='cidade']")
const estado = document.querySelector("input[name='estado']")
const pais = document.querySelector("input[name='pais']")

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

cep.addEventListener('change', () => {
    if(cep.value.length != 8) return
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(res => res.json())
        .then(data => {
            endereco.value = data.logradouro
            cidade.value = data.uf
            estado.value = data.localidade
            pais.value = 'Brasil'
        })

})

