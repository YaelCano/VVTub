var menuIcon = document.querySelector("menu-icon");
var siderbar = document.querySelector("siderbar");
var container = document.querySelector("container");


menuIcon.onClick = function(){
    siderbar.classList.toggle("small-siderbar");
    container.classList.toggle("large-container");
}