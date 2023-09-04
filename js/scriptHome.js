
function ativaTexto(elemento) {
    const letras = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    letras.forEach((letra, i) =>{
        setTimeout(() =>{
            elemento.innerHTML += letra;},
            90 * i
        );
    })
}

const subTexto = document.querySelector(".home__subtexto");
ativaTexto(subTexto);