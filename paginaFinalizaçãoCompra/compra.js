window.addEventListener('load', function(){

    //VALIDAR CAMPOS OBRIGATÓRIOS
const form = document.querySelector('main .content-1.content-form');

form.addEventListener('submit', function(event){
    //VERIFICAR CAMPOS EM BRANCO
    event.preventDefault();
    const inputList = document.querySelectorAll('main content-1.conten-form input');
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









// window.addEventListener('load', function () {
//     let form = document.querySelector('main form.form-card');
//     let inputList = document.querySelectorAll('main form.form-card input');

//     const removeErros = function () {
//         const errorSpan = document.querySelectorAll('main form.form-card span.error');
//         errorSpan.forEach(span => span.remove());
//     }

//     const createError = function (input, mensagem) {
//         const errorSpan = document.createElement('span');
//         errorSpan.classList.add('error');
//         errorSpan.innerText = mensagem;

//         input.insertAdjacentElement('afterend', errorSpan);
//     }

//     form.addEventListener('submit', function (event) {

//         let hasError = false;

//         event.preventDefault();
//         console.log("testando...");
//         removeErros();

//         inputList.forEach(input => {
//             if (!input.value) {
//                 hasError = true;
//                 createError(input, "Campo Obrigatório!")
//             }
//         });

//         if (!hasError) {
//             this.submit();
//         }

//     });
// });
