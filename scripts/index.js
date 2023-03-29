

function insertarMenu(id)
{   id.style.right = "0px";
    id.style.left = "0px";
    id.style.backgroundColor = "black";
    id.innerHTML=" <div class=\"menu\">\n" +
        "        <ul class=\"menuLista\">\n" +
        "            <li class=\"menuItem\"><a class=\"refMenu\"  href=\"index.html\"><img src='../Imagenes/Logo-menu.png' alt='Gimnasio SportCompostela'></a> </li>\n" +
        "            <li class=\"menuItem\"><a class=\"refMenu\" href=\"fitness.html\">\n" +
        "                FITNESS </a></li>\n" +
        "            <li class=\"menuItem\"><a class=\"refMenu\" href=\"nutricion.html\"> NURTRICIÓN </a></li>\n" +
        "            <li class=\"menuItem\"><a class=\"refMenu\" href=\"personal.html\"> PERSONAL</a></li>\n" +
        "            <li class=\"menuItem\"><a class=\"refMenu\" href=\"cuotas.html\"> CUOTAS</a></li>\n" +
        "            <li class=\"menuItem\"><a class=\"refMenu\" href=\"contacto.html\"> CONTACTO</a></li>\n" +
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
        textoInicio.style.display = "none";

    }else if(window.innerWidth > 1260) {
        menuFijo.innerHTML="";
        menuImagen.style.display = "flex";
        textoInicio.style.display = "inline-block";
        logoInicio.style.display = "inline-block";
    }

});

