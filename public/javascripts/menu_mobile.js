let opMenu = document.getElementById('op-menu');

let atvMenu = document.getElementById('check-menu');

let navMobile = document.getElementById("navbar-mobile");

//console.log(atvMenu.checked);

atvMenu.addEventListener('click', function () {
    if (atvMenu.checked) {
        console.log("ativo");

        //opMenu.style.animation = "deslizar";
        opMenu.style.transform = "translateX(0%)";
        opMenu.style.zIndex = "10";
        navMobile.style.zIndex = "8";

    } else {
        console.log("desativado");

        opMenu.style.transform = "translateX(-100%)";
        opMenu.style.zIndex = "-1";
    }
});