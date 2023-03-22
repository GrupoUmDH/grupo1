const popUp = document.querySelector("div.pop-up");
const popUp_sair = document.querySelector("div.pop-up span button");

//SAIR DO POP-UP
popUp_sair.addEventListener("click", (event) => {
    popUp.style.display = "none";
});
