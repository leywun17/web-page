let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});


let openModal = document.querySelector("#boton-juego")
let modalbtc = document.querySelector("#modal")
let closeModal = document.getElementById('close')

openModal.onclick = function(){
  modalbtc.style.visibility = "visible"
}

closeModal.onclick = function(){
  modalbtc.style.visibility = "hidden"
}

modalbtc.onclick = function(){
  modalbtc.style.visibility = "hidden"
}

//-------------------------------------------------------------------------------------------------------------------------

let openModal2 = document.querySelector("#boton-juego2")
let modalbtc2 = document.querySelector("#modal2")
let closeModal2 = document.getElementById('close2')

openModal2.onclick = function(){
  modalbtc2.style.visibility = "visible"
}

closeModal2.onclick = function(){
  modalbtc2.style.visibility = "hidden"
}

modalbtc2.onclick = function(){
  modalbtc2.style.visibility = "hidden"
}

//--------------------------------------------------------------------------------------------------------

let openModal3 = document.querySelector("#boton-juego3")
let modalbtc3 = document.querySelector("#modal3")
let closeModal3 = document.getElementById('close3')

openModal3.onclick = function(){
  modalbtc3.style.visibility = "visible"
}

closeModal3.onclick = function(){
  modalbtc3.style.visibility = "hidden"
}

modalbtc3.onclick = function(){
  modalbtc3.style.visibility = "hidden"
}

//--------------------------------------------------------------------------------------------------------

let openModal4 = document.querySelector("#boton-juego4")
let modalbtc4 = document.querySelector("#modal4")
let closeModal4 = document.getElementById('close4')

openModal4.onclick = function(){
  modalbtc4.style.visibility = "visible"
}

closeModal4.onclick = function(){
  modalbtc4.style.visibility = "hidden"
}

modalbtc4.onclick = function(){
  modalbtc4.style.visibility = "hidden"
}

//--------------------------------------------------------------------------------------------------------

let openModal5 = document.querySelector("#boton-juego5")
let modalbtc5 = document.querySelector("#modal5")
let closeModal5 = document.getElementById('close5')

openModal5.onclick = function(){
  modalbtc5.style.visibility = "visible"
}

closeModal5.onclick = function(){
  modalbtc5.style.visibility = "hidden"
}

modalbtc5.onclick = function(){
  modalbtc5.style.visibility = "hidden"
}

//--------------------------------------------------------------------------------------------------------

let openModal6 = document.querySelector("#boton-juego6")
let modalbtc6 = document.querySelector("#modal6")
let closeModal6 = document.getElementById('close6')

openModal6.onclick = function(){
  modalbtc6.style.visibility = "visible"
}

closeModal6.onclick = function(){
  modalbtc6.style.visibility = "hidden"
}

modalbtc6.onclick = function(){
  modalbtc6.style.visibility = "hidden"
}

//--------------------------------------------------------------------------------------------------------

let openModal7 = document.querySelector("#boton-juego7")
let modalbtc7 = document.querySelector("#modal7")
let closeModal7 = document.getElementById('close7')

openModal7.onclick = function(){
  modalbtc7.style.visibility = "visible"
}

closeModal7.onclick = function(){
  modalbtc7.style.visibility = "hidden"
}

modalbtc7.onclick = function(){
  modalbtc7.style.visibility = "hidden"
}

//--------------------------------------------------------------------------------------------------------

let openModal8 = document.querySelector("#boton-juego8")
let modalbtc8 = document.querySelector("#modal8")
let closeModal8 = document.getElementById('close8')

openModal8.onclick = function(){
  modalbtc8.style.visibility = "visible"
}

closeModal8.onclick = function(){
  modalbtc8.style.visibility = "hidden"
}

modalbtc8.onclick = function(){
  modalbtc8.style.visibility = "hidden"
}

//--------------------------------------------------------------------------------------------------------

