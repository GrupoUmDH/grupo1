const form_cadastro = document.querySelector(".form-cad");
const inputList = document.querySelectorAll("form.form-cad input");
const erro_cad = document.querySelectorAll("form.form-cad .invisible");

const form_login = document.querySelector('.form-login');
const inputLogin = document.querySelectorAll(".form-login input");
const erro_log = document.querySelectorAll("form.form-login .invisible");

form_cadastro.addEventListener("submit", (event) => {
    
    dadosPreenchidos(inputList, erro_cad, this.event);
});

form_login.addEventListener('submit', (event) => {
    dadosPreenchidos(inputLogin, erro_log, this.event);
})

const dadosPreenchidos = (input, erro, event) => {
    input.forEach((input, index) => {
        if (!input.value) {
            //onsole.log(div_erro[index]);
            event.preventDefault();
            erro[index].style.display = "block";
        } else {
            erro[index].style.display = "none";
        }
    });
}

/*

const removeErros = function () {
    const errorSpan = document.querySelectorAll(
        "main form.form-cad span.error"
    );
    errorSpan.forEach((span) => span.remove());
};

const createError = function (input, mensagem) {
    const errorSpan = document.createElement("span");
    errorSpan.classList.add("error");
    errorSpan.innerText = mensagem;

    input.insertAdjacentElement("afterend", errorSpan);
};

form.addEventListener("submit", function (event) {
    

    event.preventDefault();
    removeErros();
    let hasError = false;

    inputList.forEach((input) => {
        if (!input.value) {
            hasError = true;
            createError(input, "Campo Obrigatório!");
        }
    });

    if (!hasError) {
        this.submit();
    }
});

const verificaUser = function (input) {};
*/
