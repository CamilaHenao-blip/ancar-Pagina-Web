const menuIcon = document.getElementById("menuImagen");
const navHeader = document.getElementById("navH");
const closeMenu = document.getElementById("closeMenu");

//Espera el evento para abrir
menuIcon.addEventListener("click", () => {
  if (window.innerWidth <= 840) {
    navHeader.classList.toggle("active");
  }
});

// Espera el evento para cerrar
closeMenu.addEventListener("click", () => {
    if (window.innerWidth <= 840) {
  navHeader.classList.remove("active");}
});
