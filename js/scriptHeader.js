/* Navbar sticky */
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollT > 50);
})

/* Menu com cor ao scrollar */
let listaMenu = document.querySelectorAll('header ul li a');

let section = document.querySelectorAll('section');

function menuAtivo() {
    let extensao = section.length;
    while(--extensao && window.scrollY + 97 < section[extensao].offsetTop){}
    listaMenu.forEach(sec => sec.classList.remove("active"));
    listaMenu[extensao].classList.add("active");
}

menuAtivo();
window.addEventListener("scroll", menuAtivo);