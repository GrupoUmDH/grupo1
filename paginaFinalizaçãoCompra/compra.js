window.addEventListener('load', function(){

    //VALIDAR CAMPOS OBRIGATÓRIOS
const form = document.querySelector('main .content-1');

form.addEventListener('submit', function(event){
    //VERIFICAR CAMPOS EM BRANCO
    event.preventDefault();
    const inputList = document.querySelectorAll('main .content-1 .conten-form input')
    inputList.forEach(input => {
        if (!input.value){
            const errorSpan = document.createElement ('span');
            errorSpan.classList.add('error');
            errorSpan.innerText = 'Campo obrigatório'
            input.insertAdjacentElement('afterend' , errorSpan);
        }
    })
});
});


