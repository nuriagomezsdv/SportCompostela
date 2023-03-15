

function makeGrayAndBigger(img) {
    img.style.filter = "grayscale(40%)";
    img.classList.add("bigger");
}

function makeOriginalAndNormal(img) {
    img.style.filter = "none";
    img.classList.remove("bigger");
}



function mostrarFigura(idFiguras) {
    var figura = document.getElementById(idFiguras);
    if (figura.style.display === "none") {
        figura.style.display = "block";

    }

    var otrasFiguras = document.querySelectorAll('#MenuActividades figure:not(#' + idFiguras + ')');
    for (var i = 0; i < otrasFiguras.length; i++) {
        otrasFiguras[i].style.display = "none";
    }


}