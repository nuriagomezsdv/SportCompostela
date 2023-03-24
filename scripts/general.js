

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



function mostrarFigura(idFiguras, idBotonClick) {
    var figura = document.getElementById(idFiguras);
    var funcionoIf = false;
    let boton = document.getElementById(idBotonClick).children[0];
    let botones = document.querySelectorAll('#MenuActividades li');

    for (var i = 0; i < botones.length; i++) {
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

    var otrasFiguras = document.querySelectorAll('#MenuActividades figure:not(#' + idFiguras + ')');
    for (i = 0; i < otrasFiguras.length; i++) {
        otrasFiguras[i].style.display = "none";
    }


}