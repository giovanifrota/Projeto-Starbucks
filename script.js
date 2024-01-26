let circulo = document.querySelector(".circulo")
let imgCopo = document.querySelector(".starbucks")
let verde = document.querySelector(".verde")
let amarelo = document.querySelector(".amarelo")
let rosa = document.querySelector(".rosa")

function TrocarImg(){
    imgCopo.src = "./img/img2.png"
    circulo.style.background = "#eb7495"
}
function TrocarImg3(){
    imgCopo.src = "./img/img3.png"
    circulo.style.background = "#d752b1"
}
function TrocarImg1(){
    imgCopo.src = "./img/img1.png"
    circulo.style.background = "#017143"
}
verde.addEventListener("click", TrocarImg1)
rosa.addEventListener("click", TrocarImg3)
amarelo.addEventListener("click", TrocarImg)