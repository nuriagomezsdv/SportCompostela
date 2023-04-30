// Funciones para las imagenes
function makeGray(img) {
    img.style.color = "white";
    img.style.opacity = "80%";

}

function makeOriginal(img) {
    img.style.opacity = "100%";

}


//Eventos
$(document).ready(function () {
    let imagenes = document.querySelectorAll(" .cajaImagen img");
    for (let i = 0; i < imagenes.length; i++) {
        // Ejemplo: cambiar el ancho de cada imagen
        imagenes[i].addEventListener("mouseover", function () {
            makeGray(this);
        });
        imagenes[i].addEventListener("mouseout", function () {
            makeOriginal(this);
        });
    }


});

$(document).ready(function () {
    let aux = document.querySelectorAll(" .refMenu");
    for (let i = 0; i < aux.length; i++) {
        // Ejemplo: cambiar el ancho de cada imagen
        aux[i].addEventListener("click", function () {
            //Dependiendo de cual sea el pulsado, se llema a unas funciones u otras
            console.log(aux[i].id)
            if (aux[i].id === "botonFuncional") {
                mostrarFigura("Funcional", aux[i].id);
            } else if (aux[i].id === "botonYoga") {
                mostrarFigura("Yoga", aux[i].id);
            } else if (aux[i].id === "botonBCombat") {
                mostrarFigura("BodyCombact", aux[i].id);
            } else if (aux[i].id === "botonSpinning") {
                mostrarFigura("Spinning", aux[i].id);
            } else if (aux[i].id === "botonAquagym") {
                mostrarFigura("AquaGym", aux[i].id);
            }
        });

    }


});


let tablaHash = {};
//Funcion para realizar un efecto visual en los elementos de las paginas
$(document).ready(function () {

    realizarAparcion();

    window.addEventListener('scroll', function () {
        realizarAparcion();

    });


});

function realizarAparcion() {
    let elementos = $(".Transicion");


    for (let i = 0; i < elementos.length; i++) {

        tablaHash[elementos[i].id] = false;
    }
    for (let i = 0; i < elementos.length; i++) {
        // Verificamos si el div está visible en la ventana

        let element = elementos [i];
        let position = element.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom > 300) {

            if (!tablaHash[element.id]) { // Verificamos si ya se ha animado el div

                element.style.opacity = "1.5"; // Mostramos el div con animación
                element.style.transform = 'translateY(0)'; // Movemos el div hacia arriba con animación
                tablaHash[element.id] = true; // Actualizamos la variable de control
            }
        }

    }
}


$(document).ready(function () {
    cambiarColor();
});

//Funcion para cambiar el color de letra de los elementos de una lista
function cambiarColor() {
    const listaElementos = document.querySelectorAll('ul.menuLista > li');
    listaElementos.forEach(elemento => {
        if (elemento.id === window.document.title) {
            elemento.style.color = "#b2d8b2";
            elemento.style.fontSize = "30px"
        }
    });
}

$(document).ready(function () {
    cambiarMenuSegunTamanho();

});

function insertarMenu(id) {
    id.style.right = "0px";
    id.style.left = "0px";
    id.style.backgroundColor = "black";
    if(document.title === "SportCompostela") {
        id.innerHTML = " <div class=\"menu\">\n" +
            "        <ul class=\"menuLista\">\n" +
            "            <li class=\"menuItem\" ><a class=\"refMenu\"  href=\"index.html\"><img src='Imagenes/Logo-menu.png' alt='Gimnasio SportCompostela'></a> </li>\n" +
            "            <li class=\"menuItem\" id=\"Fitness\"'><a class=\"refMenu\" href=\"html/fitness.html\">\n" +
            "                FITNESS </a></li>\n" +
            "            <li class=\"menuItem\" id=\"Nutricion\"><a class=\"refMenu\" href=\"html/nutricion.html\"> NUTRICIÓN </a></li>\n" +
            "            <li class=\"menuItem\" id=\"Personal\"><a class=\"refMenu\" href=\"html/personal.html\"> PERSONAL</a></li>\n" +
            "            <li class=\"menuItem\" id=\"Cuotas\"><a class=\"refMenu\" href=\"html/cuotas.html\"> CUOTAS</a></li>\n" +
            "            <li class=\"menuItem\" id=\"Contacto\"><a class=\"refMenu\" href=\"html/contacto.html\"> CONTACTO</a></li>\n" +
            "        </ul>\n" +
            "    </div>";
    } else {
        id.innerHTML = " <div class=\"menu\">\n" +
            "        <ul class=\"menuLista\">\n" +
            "            <li class=\"menuItem\" ><a class=\"refMenu\"  href=\"../index.html\"><img src='../Imagenes/Logo-menu.png' alt='Gimnasio SportCompostela'></a> </li>\n" +
            "            <li class=\"menuItem\" id=\"Fitness\"'><a class=\"refMenu\" href=\"fitness.html\">\n" +
            "                FITNESS </a></li>\n" +
            "            <li class=\"menuItem\" id=\"Nutricion\"><a class=\"refMenu\" href=\"nutricion.html\"> NUTRICIÓN </a></li>\n" +
            "            <li class=\"menuItem\" id=\"Personal\"><a class=\"refMenu\" href=\"personal.html\"> PERSONAL</a></li>\n" +
            "            <li class=\"menuItem\" id=\"Cuotas\"><a class=\"refMenu\" href=\"cuotas.html\"> CUOTAS</a></li>\n" +
            "            <li class=\"menuItem\" id=\"Contacto\"><a class=\"refMenu\" href=\"contacto.html\"> CONTACTO</a></li>\n" +
            "        </ul>\n" +
            "    </div>";
    }
}


// Añadimos un evento para que cuando se haga scroll se ejecute
window.addEventListener('scroll', function () {
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
    } else if (window.scrollY < 100 && window.innerWidth > 1260) {
        menuFijo.innerHTML = "";
        menuImagen.style.display = "flex";
    } else if (window.scrollY < 100 && window.innerWidth <= 1260 && window.innerWidth > 800) {
        menuFijo.style.backgroundColor = "rgba(90, 90, 90, 0.5)";
        textoInicio.style.top = "60%";
        textoInicio.style.display = "inline-block";
    } else if (window.scrollY < 100 && window.innerWidth < 800) {
        menuFijo.style.backgroundColor = "rgba(90, 90, 90, 0.5)";
    }
});

// Añadimos un evento para que cuando la pantalla se haga pequeña se ejecute

window.addEventListener("resize", function () {
    cambiarMenuSegunTamanho();
    cambiarColor();

});

//Funcion para comprobar el tamaño de la pagina y que meta un menu u otro
function cambiarMenuSegunTamanho() {
    let menuFijo = document.getElementById("menuFijo");
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
        textoInicio.style.display = "inline-block";
        textoInicio.style.top = "60%";

    } else if (window.innerWidth < 800) {
        insertarMenu(menuFijo);
        menuFijo.style.position = "fixed";
        menuFijo.style.zIndex = "100";
        menuImagen.style.display = "none";
        menuFijo.style.backgroundColor = "rgba(90, 90, 90, 0.5)";
        logoInicio.style.display = "none";
        textoInicio.style.display = "none";

    } else if (window.innerWidth > 1260) {
        menuFijo.innerHTML = "";
        menuImagen.style.display = "flex";
        textoInicio.style.display = "inline-block";
        logoInicio.style.display = "inline-block";
        textoInicio.style.top = "30%";
    }
}

//Fin de funciones para el menu
//El método JQuery es una combinación junto con un método de acceso al DOM
$(document).ready(function () {
    let piePagina = document.getElementsByTagName("footer")[0];
    $(piePagina).css("background-color", "black");
});

//Jes6
rellenarTexto = () => "ACTIVIDADES";
const elementoH2 = document.createElement("h2");
elementoH2.innerText = rellenarTexto();

$(document).ready(function () {
    const seccion = document.getElementById("actividades");

    if (document.getElementById("actividades") != null) {
        document.getElementById("actividades").insertBefore(elementoH2, seccion.firstChild);
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
        funcionoIf = true;

    }
    if (funcionoIf === false) {
        figura.style.display = "block";
        boton.style.backgroundColor = "#b2d8b2";
    }

    let otrasFiguras = document.querySelectorAll('#MenuActividades figure:not(#' + idFiguras + ')');
    for (let i = 0; i < otrasFiguras.length; i++) {
        otrasFiguras[i].style.display = "none";
    }

}

// Funcion para detectar si el email es correcto
function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Funcion para detectar si el telefono es correcto
function validarTelefono(telefono) {
    const numTelef = /^\d{9}$/;
    return numTelef.test(telefono);
}

// Listener para el boton de enviar del formulario
// Listener para el evento submit del formulario
$(document).ready(function () {
    let formulario = document.querySelector('form');
    if (formulario != null) {
            formulario.addEventListener('submit', function (event) {
            event.preventDefault(); // evita que el formulario se envíe automáticamente

            let nombre = document.getElementsByName("nombre")[0].value;
            let apellidos = document.getElementsByName("apellidos")[0].value;
            let email = document.getElementsByName("mail")[0].value;
            let telefono = document.getElementsByName("telefono")[0].value;

            if (nombre === "" || email === "" || telefono === "" || apellidos === "") {
                alert("Hay campos vacios que son necesarios");
            } else if (!validarEmail(email)) {
                alert("El email no es correcto.");
            } else if (!validarTelefono(telefono)) {
                alert("El número teléfono no es correcto.");
            } else {
                alert("Enviado correctamente.\nTe contactaremos lo antes posible!");
                this.submit(); // envía el formulario
            }
        });
    }
});

// Introduccion de datos de un fichero JSON
// El fichero JSON contiene las diferentes cuotas del gimnasio

function cargaCuotas(){
    fetch('../archivos/cuotas.json').then(ajaxOK);
}

function ajaxOK(response){
    response.json().then(mostrarCuotas);
}
function mostrarCuotas(jsonObject) {
    let cuotasGimnasio = document.getElementById("cuotasGimnasio");
    if (cuotasGimnasio != null) {
        let httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let txt = "";
                for (x in jsonObject.Cuotas)
                    txt = txt + "<div class=\"cajaTexto sombreado\">" + "<p class=\"fondoVerde\"><strong>" + jsonObject.Cuotas[x].Nombre + "</strong></p> <p class=\"textoPrecio\">" +
                        jsonObject.Cuotas[x].Precio + "</p> <p class=\"textoIndicativo\">" + jsonObject.Cuotas[x].Texto + "</p> </div>";
                cuotasGimnasio.innerHTML = txt;
            }
        };
        httpRequest.open("GET", "../archivos/cuotas.json", true);
        httpRequest.send();
    }
}

$(document).ready(cargaCuotas);

// Introduccion de datos de un fichero XML
// El fichero XML contiene las actividades que hay en el gimnasio

function cargaActividades() {
    let listaActividades = document.getElementById("listaActividades");
    if (listaActividades != null) {
        let httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let xmlDoc = this.responseXML;
                let txt = "";
                let x = xmlDoc.getElementsByTagName("actividad");
                for (let i = 0; i < x.length; i++)
                    txt = txt + "<li><span class=\"colorVerde\"> ✓ </span> " + x[i].childNodes[0].nodeValue + "</li>";
                listaActividades.innerHTML = txt;
            }
        };
        httpRequest.open("GET", "../archivos/actividades.xml", true);
        httpRequest.send();
    }
}

$(document).ready(cargaActividades);




