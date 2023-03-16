//DADOS NOVO CARTÃO//

const form_cartao = document.querySelector('main .active .formulario');
const new_card = document.querySelectorAll('main .new card input:not(.check)');
const number = document.querySelector("input[name='number']");
const name_card = document.querySelector("input[name='name1']");
const expiry = document.querySelector("input[name='expiry']");
const cvc = document.querySelector("input[name='cvc']");

form.addEventListener('submit', function(event){
    err_form(event, number);
    err_form(event, name_card);
    err_form(event, expiry);
    err_form(event, cvc);
});

//ALTERAR DADOS//


const form_email = document.getElementById('form-email');
const email = document.querySelector("form input[name='email']");
const confEmail = document.querySelector("input[name='email1']");

const form_nome = document.getElementById('form-nome');
const nome = document.querySelector("input[name='name']")

const form_passwprd = document.getElementById('form-password');
const password = document.querySelector("input[name='password']")
const confpassword = document.querySelector("input[name='password1']")


form_email.addEventListener('submit', function (event) {
    err_form(event, email);
    err_form(event, confEmail);
});

form_nome.addEventListener('submit', function (event) {
    err_form(event, nome);
});

form_passwprd.addEventListener('submit', function (event) {
    err_form(event, password);
    err_form(event, confpassword);
});

// FUNÇÃO DE VERIFICAÇÃO
const err_form = (event, iden) => {
    
    const nome = iden.name;
    const err_div = document.querySelector('.err-'+nome);

    if (!iden.value) {
        event.preventDefault();

        console.log('nao tem nada escrito - retorna erro');
        err_div.classList.remove('invisible');
        err_div.style.cssText = "color: red; text-align: center;";
        iden.style.border = "2px solid red";
    } else {
        event.preventDefault();

        err_div.classList.add('invisible');
        iden.style.border = "";
        console.log('retorno positivo');
    }
}
