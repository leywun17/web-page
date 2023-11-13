let abrirMenu = document.querySelector("#abrir");
let cerrarMenu = document.querySelector("#cerrarM");
let nav = document.querySelector("#nav");
let principalContainer = document.querySelector("#principal-container")
let mobileContainer = document.querySelector("#mobileContainer")

let swiper = new Swiper(".mySwiper",{
	effect: "coverflow",
	grabCusor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 15,
		strech: 0,
		depth: 300,
		modifier: 1,
		slideShadows: true,
	},
	loop: true
})

abrirMenu.addEventListener("click", () => {
	nav.classList.add("visible")
})

cerrarMenu.addEventListener("click", () =>{
	nav.classList.remove("visible")
})

