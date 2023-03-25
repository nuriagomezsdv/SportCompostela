

function makeGrayAndBigger(img) {
    img.style.filter = "grayscale(40%)";
    img.classList.add("bigger");
}

function makeGray(img){
    img.style.filter = "grayscale(40%)";

}

function makeOriginalAndNormal(img) {
    img.style.filter = "none";
    img.classList.remove("bigger");
}

function makeOriginal(img){
    img.style.filter = "none";

}




//Jes6



//Aqui hay 3 metodos de acceso al DOM, en index.js está getElementByClassName

//RECORDATORIO: EL DE getElementByName tiene que ser con algo de formulario


//El método JQuery es una combinación junto con un método de acceso al DOM
$(document).ready(function(){
    var piePagina= document.getElementsByTagName("footer")[0];
    $(piePagina).css("background-color", "black");
});

const rellenarTexto= texto => "ACTIVIDADES";
const elementoH2 = document.createElement("h2");
elementoH2.innerText = rellenarTexto();

$(document).ready(function(){
    const seccion = document.getElementById("actividades");

    document.getElementById("actividades").insertBefore(elementoH2,seccion.firstChild); 

});


function mostrarFigura(idFiguras, idBotonClick) {
    let figura = document.getElementById(idFiguras);
    let funcionoIf = false;
    let boton = document.getElementById(idBotonClick).children[0];
    let botones = document.querySelectorAll('#MenuActividades li');

    for (let i = 0; i < botones.length; i++) {
        botones[i].style.backgroundColor = "lightgray";
    }

    if (figura.style.display === "none") {
        figura.style.display = "block";
        boton.style.backgroundColor = "#b2d8b2";
        funcionoIf= true;

    }
    if(funcionoIf===false){
        figura.style.display = "block";
        boton.style.backgroundColor = "#b2d8b2";
    }

    let otrasFiguras = document.querySelectorAll('#MenuActividades figure:not(#' + idFiguras + ')');
    for (let i = 0; i < otrasFiguras.length; i++) {
        otrasFiguras[i].style.display = "none";
    }


}