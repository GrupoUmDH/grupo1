window.addEventListener('load', function(){

    let navBarMobile = document.getElementById('navbar-mobile');
    let opMenu = document.getElementById('op-menu');

    let atvMenu = document.getElementById('check-menu');

    console.log(atvMenu.checked);


    atvMenu.addEventListener('click', function(){
        if(atvMenu.checked){
            console.log("ativo");

            opMenu.style.animation = "deslizar";

            opMenu.style.transform = "translateX(0%)";

        } else {
            console.log("desativado");

            opMenu.style.transform = "translateX(-100%)";
        }
    });



});