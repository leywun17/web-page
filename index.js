let abrirMenu = document.querySelector("#abrir");
let cerrarMenu = document.querySelector("#cerrarM");
let nav = document.querySelector("#nav");
let principalContainer = document.querySelector("#principal-container")
let mobileContainer = document.querySelector("#mobileContainer")

abrirMenu.addEventListener("click", () => {
    nav.classList.add("visible")
})

cerrarMenu.addEventListener("click", () =>{
    nav.classList.remove("visible")
})