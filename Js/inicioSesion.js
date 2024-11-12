let formInicio = document.getElementById("form");

formInicio.addEventListener("submit", function(e){

    e.preventDefault();

    const emailInicio = document.getElementById("email").value;
    const passInicio = document.getElementById("Contraseña").value;

    const userStorage = JSON.parse(localStorage.getItem("user"));

    if(emailInicio === userStorage.correo  && passInicio === userStorage.pass){

        localStorage.setItem("logged", JSON.stringify(true));
        window.location.href = "../index.html";
    }
    else{
        alert("Contraseña o correo incorrecto");
    }
 });


