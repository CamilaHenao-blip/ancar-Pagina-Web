//Efecto scroll//
window.addEventListener("scroll", 
    function(){ var menu = document.querySelector(".menu");
    menu.classList.toggle("down", window.scrollY > 0);
})
