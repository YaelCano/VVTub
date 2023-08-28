
/**
 *  !JS boton superior del Menu principal
 */
var menuIcon = document.querySelector(".menu-icon"); // Agregamos un punto para seleccionar por clase
var sidebar = document.querySelector(".siderbar");    // Agregamos un punto para seleccionar por clase
var container = document.querySelector(".container"); // Agregamos un punto para seleccionar por clase

menuIcon.onclick = function() { 
    sidebar.classList.toggle("small-siderbar");
    container.classList.toggle("large-container");
}
