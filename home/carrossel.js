let carrossel = document.querySelector(".carrossel")
let slides = document.querySelectorAll(".carrossel>div")
let prevBtn = document.getElementById("prev")
let nextBtn = document.getElementById("next")

let lastClone = slides[slides.length -1].cloneNode(true)
lastClone.id= "last-clone"
let firstClone = slides[0].cloneNode(true)
firstClone.id= "first-clone"
slides[slides.length -1].insertAdjacentElement('afterend', firstClone)
slides[0].insertAdjacentElement('beforebegin', lastClone)

slides = document.querySelectorAll(".carrossel>div")

let counter = 1
let width = slides[1].clientWidth


carrossel.style.transform = "translateX(" + -width * counter + "px)"

carrossel.addEventListener("transitionend", () =>{
    if(slides[counter].id == "first-clone"){
        carrossel.style.transition= "none"
        counter= 1
        carrossel.style.transform = "translateX(" + -width * counter + "px)" 
    } else if(slides[counter].id == "last-clone"){
        carrossel.style.transition= "none"
        counter= slides.length -2
        carrossel.style.transform = "translateX(" + -width * counter + "px)"
    }
})

nextBtn.onclick = () => {
    if(counter >= slides.length -1) return
    counter++
    carrossel.style.transition= ".6s"
    carrossel.style.transform = "translateX(" + -width * counter + "px)" 
}

prevBtn.onclick = () => {
    if(counter <=0) return
    counter--
    carrossel.style.transition= ".6s"
    carrossel.style.transform = "translateX(" + -width * counter + "px)"
}

setInterval(nextBtn.onclick , 4000)