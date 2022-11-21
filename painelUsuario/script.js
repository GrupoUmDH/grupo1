//DADOS NOVO CARTÃO//

const form = document.querySelector('main .active .formulario')
const inputList = document.querySelectorAll('main .new card input:not(.check)')
const number = document.querySelector("input[name='number']")
const name = document.querySelector("input[name='name']")
const expiry = document.querySelector("input[name='expiry']")
const cvc = document.querySelector("input[name='cvc']")

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

//ALTERAR DADOS//

const dados = document.querySelector('main .alterar form')
const inputLista = document.querySelectorAll('main .alterar .form input:not(.check)')
const email = document.querySelector("input[name='email']")
const confEmail = document.querySelector("input[name='email']")
const nome = document.querySelector("input[name='name']")
const password = document.querySelector("input[name='password']")
const confpassword = document.querySelector("input[name='confpassword']")

dados.addEventListener('submit', function(event){   

    inputLista.forEach(input => {
        if (!input.value){
            event.preventDefault();
            document.querySelector('.err-'+ input.name).classList.remove('invisible')
        } else{
            document.querySelector('.err-'+ input.name).classList.add('invisible')
        }
    })
});
