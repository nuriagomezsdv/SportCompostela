
// Funciones para las imágenes
function makeGray(img){
    img.style.color = "white";
    img.style.opacity = "80%";

}

function makeOriginal(img){
    img.style.opacity = "100%";

}


//Eventos
$(document).ready(function (){
    let imagenes = document.querySelectorAll(" .cajaImagen img");
    for (let i = 0; i < imagenes.length; i++) {
        // Ejemplo: cambiar el ancho de cada imagen
        imagenes[i].addEventListener("mouseover", function() {
            makeGray(this);
        });
        imagenes[i].addEventListener("mouseout", function() {
            makeOriginal(this);
        });
    }


});

$(document).ready(function (){
    let aux = document.querySelectorAll(" .refMenu");
    for (let i = 0; i < aux.length; i++) {
        // Ejemplo: cambiar el ancho de cada imagen
        aux[i].addEventListener("click", function() {
            //Dependiendo de cual sea el pulsado, se llema a unas funciones u otras
            console.log(aux[i].id)
            if(aux[i].id==="botonFuncional"){
                mostrarFigura("Funcional",aux[i].id);
            }
            else if(aux[i].id==="botonYoga"){
                mostrarFigura("Yoga",aux[i].id);
            }
            else if(aux[i].id==="botonBCombat"){
                mostrarFigura("BodyCombact",aux[i].id);
            }
            else if(aux[i].id==="botonSpinning"){
                mostrarFigura("Spinning",aux[i].id);
            }
            else if(aux[i].id==="botonAquagym"){
                mostrarFigura("AquaGym",aux[i].id);
            }
        });

    }


});




let tablaHash = {};
//Funcion para realizar un efecto visual en los elementos de las paginas
$(document).ready(function(){

    realizarAparcion();

    window.addEventListener('scroll', function() {
        realizarAparcion();

    });


});

function realizarAparcion(){
    let elementos = $(".Transicion");


    for (let i = 0; i < elementos.length; i++) {

        tablaHash[elementos[i].id] = false;
    }
    for(let i = 0; i < elementos.length; i++) {
        // Verificamos si el div está visible en la ventana

        let element = elementos [i];
        let position = element.getBoundingClientRect();

        if( position.top < window.innerHeight && position.bottom > 300){

            if(!tablaHash[element.id]) { // Verificamos si ya se ha animado el div

                element.style.opacity = 1.5; // Mostramos el div con animación
                element.style.transform = 'translateY(0)'; // Movemos el div hacia arriba con animación
                tablaHash[element.id] = true; // Actualizamos la variable de control
            }
        }


    }
}



$(document).ready(function(){
    cambiarColor();

});

function cambiarColor(){
    const listaElementos = document.querySelectorAll('ul.menuLista > li');
    listaElementos.forEach(elemento => {
        if(elemento.id===window.document.title){
            elemento.style.color = "#b2d8b2";
            elemento.style.fontSize = "30px"
        }
    });
}

$(document).ready(function(){
    cambiarMenuSegunTamanho();

});

//Funcion para comprobar el tamaño de la pagina y que meta un menu u otro





function insertarMenu(id)
{   id.style.right = "0px";
    id.style.left = "0px";
    id.style.backgroundColor = "black";
    id.innerHTML=" <div class=\"menu\">\n" +
        "        <ul class=\"menuLista\">\n" +
        "            <li class=\"menuItem\" ><a class=\"refMenu\"  href=\"index.html\"><img src='../Imagenes/Logo-menu.png' alt='Gimnasio SportCompostela'></a> </li>\n" +
        "            <li class=\"menuItem\" id=\"Fitness\"'><a class=\"refMenu\" href=\"fitness.html\">\n" +
        "                FITNESS </a></li>\n" +
        "            <li class=\"menuItem\" id=\"Nutricion\"><a class=\"refMenu\" href=\"nutricion.html\"> NURTRICIÓN </a></li>\n" +
        "            <li class=\"menuItem\" id=\"Personal\"><a class=\"refMenu\" href=\"personal.html\"> PERSONAL</a></li>\n" +
        "            <li class=\"menuItem\" id=\"Cuotas\"><a class=\"refMenu\" href=\"cuotas.html\"> CUOTAS</a></li>\n" +
        "            <li class=\"menuItem\" id=\"Contacto\"><a class=\"refMenu\" href=\"contacto.html\"> CONTACTO</a></li>\n" +
        "        </ul>\n" +
        "    </div>";
}


window.addEventListener('scroll', function() {
    let menuFijo = document.getElementById("menuFijo");
    let menuImagen = document.getElementsByClassName("menu")[0];
    let textoInicio = document.getElementsByClassName("textoInicio")[0];

    if (window.scrollY >= 100) {
        // Si el scroll es mayor que 100 creamos el menu fijo
        insertarMenu(menuFijo);
        cambiarColor();
        menuFijo.style.position = "fixed";
        menuFijo.style.zIndex = "100";
        menuImagen.style.display = "none";

        // Si el scroll es mayor que 100 cambiamos el color del menu fijo
    }else if(window.scrollY < 100 && window.innerWidth > 1260) {
        menuFijo.innerHTML = "";
        menuImagen.style.display = "flex";
    }else if(window.scrollY < 100 && window.innerWidth <= 1260 && window.innerWidth > 800) {
        menuFijo.style.backgroundColor = "rgba(90, 90, 90, 0.5)";
        textoInicio.style.top = "60%";
        textoInicio.style.display = "inline-block";
    }else if(window.scrollY < 100 && window.innerWidth < 800){
        menuFijo.style.backgroundColor = "rgba(90, 90, 90, 0.5)";
    }
});

// Añadimos un evento para que cuando la pantalla se haga pequeña se ejecute

window.addEventListener("resize", function() {
    cambiarMenuSegunTamanho();

});

function cambiarMenuSegunTamanho(){
    let menuFijo = document.getElementById("menuFijo");
    //let menuImagen = document.getElementsByClassName("menu")[0];
    //let inicio = document.getElementsByClassName("inicio")[0];
    let textoInicio = document.getElementsByClassName("textoInicio")[0];
    let logoInicio = document.getElementsByClassName("logoInicio")[0];
    let menuImagen = document.getElementsByClassName("menu")[0];

    if (window.innerWidth <= 1260 && window.innerWidth > 800) {
        insertarMenu(menuFijo);
        menuFijo.style.backgroundColor = "rgba(90, 90, 90, 0.5)";
        menuFijo.style.position = "fixed";
        menuFijo.style.zIndex = "100";
        logoInicio.style.display = "none";
        menuImagen.style.display = "none";
        textoInicio.style.top = "60%";

    }else if(window.innerWidth < 800){
        insertarMenu(menuFijo);
        menuFijo.style.position = "fixed";
        menuFijo.style.zIndex = "100";
        menuImagen.style.display = "none";
        menuFijo.style.backgroundColor = "rgba(90, 90, 90, 0.5)";

        textoInicio.style.display = "none";

    }else if(window.innerWidth > 1260) {
        menuFijo.innerHTML="";
        menuImagen.style.display = "flex";
        textoInicio.style.display = "inline-block";
        logoInicio.style.display = "inline-block";
    }
}

//Fin de funciones para el menu









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

    if(document.getElementById("actividades")!=null){
        document.getElementById("actividades").insertBefore(elementoH2,seccion.firstChild);

    }


});


function mostrarFigura(idFiguras, idBotonClick) {
    let figura = document.getElementById(idFiguras);
    let funcionoIf = false;
    let boton = document.getElementById(idBotonClick);
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
