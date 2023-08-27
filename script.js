var menuIcon = document.querySelector(".menu-icon"); // Agregamos un punto para seleccionar por clase
var sidebar = document.querySelector(".siderbar");    // Agregamos un punto para seleccionar por clase
var container = document.querySelector(".container"); // Agregamos un punto para seleccionar por clase

menuIcon.addEventListener("click", function() { // Usamos addEventListener en lugar de onClick
    sidebar.classList.toggle("siderbar");
    container.classList.toggle("large-container");
});
