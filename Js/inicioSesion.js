let formInicio = document.getElementById("form");

formRegistro.addEventListener("submit", function(e){
    e.preventDefault();

    const emailInicio = document.getElementById("email").value;
    const passInicio = document.getElementById("Contraseña").value;

    const userStorage = JSON.parse(localStorage.getItem("user"));

    window.location.href = "../Html/inicio.html";

})