let formRegistro = document.getElementById("registroF");

formRegistro.addEventListener("submit", function(e)
{
    e.preventDefault();

    const nameFort = document.getElementById("nombres").value;
    const apellFort = document.getElementById("apellidos").value;
    const emailFort = document.getElementById("email").value;
    const contraseñaFort = document.getElementById("password").value;
    const genderFort = document.getElementById("genero").value;

    const newUser = {
        nombre: nameFort,
        apellido: apellFort,
        correo: emailFort,
        pass: contraseñaFort,
        gender: genderFort
    }

    localStorage.setItem("user", JSON.stringify(newUser));

    window.location.href = "../Html/inicio.html";
})