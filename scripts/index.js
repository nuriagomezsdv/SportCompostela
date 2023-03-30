


window.addEventListener('scroll', function() {
    const items = document.getElementsByClassName('menuItem');
    let elemento_listaImagen = document.getElementById("logoMenu");
    if (window.scrollY >= 100) {
        // Ponemos el fondo del menu en negro
        /*for (let i = 0; i < items.length; i++) {
            items[i].style.backgroundColor = 'black';
        }*/
        /*document.querySelector('.menu').style.backgroundColor = 'black';
        // Ponemos en el contenido del <a> la imagen <img src="../Imagenes/logo.png" alt="Gimnasio SportCompostela" width=20% height=20%>
        elemento_listaImagen.children[0].innerHTML = "<img src='../Imagenes/Logo-menu.png' alt='Gimnasio SportCompostela'>";
        elemento_listaImagen.style.display = "flex";
        elemento_listaImagen.style.justifyContent = "center";
        elemento_listaImagen.style.alignItems = "center";
        // Hacemos que el menu mida de ancho toda la pantalla
        document.querySelector('.menuInicio').style.left = '50%';*/

    }else if(window.scrollY < 100) {
        // Ponemos el fondo del menu en gris traslucido
        /*for (let i = 0; i < items.length; i++) {
            items[i].style.backgroundColor = 'rgba(90, 90, 90, 0.5)';
        }*/
        /*document.querySelector('.menu').style.backgroundColor = 'rgba(90, 90, 90, 0.5)';
        elemento_listaImagen.children[0].innerHTML="";
        elemento_listaImagen.style.display = "none";*/

    }
});

window.addEventListener('scroll', function() {
    let menuFijo = document.getElementById("menuFijo");
    if (window.scrollY >= 50) {
        menuFijo.style.position = "fixed";
        menuFijo.style.right = "0px";
        menuFijo.style.left = "0px";
        menuFijo.style.backgroundColor = "black";
        menuFijo.style.zIndex = "100";
        menuFijo.innerHTML=" <div class=\"menu\">\n" +
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

    }else if(window.scrollY < 50) {
        menuFijo.innerHTML="";

    }
});
