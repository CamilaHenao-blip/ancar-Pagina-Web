let formInicio = document.getElementById("form");

formInicio.addEventListener("submit", function(e){

    const emailInicio = document.getElementById("email").value;
    const passInicio = document.getElementById("Contraseña").value;

    const userStorage = JSON.parse(localStorage.getItem("user"));

    console.log(emailInicio + " " +passInicio);
    console.log(userStorage.correo + " " + userStorage.pass);

    if(emailInicio == userStorage.correo  && passInicio == userStorage.pass){

        alert("sfdf");
          window.location.href = "../index.html";
    }
    else{
        alert("Contraseña o correo incorrecto");
    }
 });


