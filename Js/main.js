let logged = JSON.parse(localStorage.getItem("logged"));

if(logged){
    
    const nameLabel = document.getElementById("userU");

    const loginElement = document.getElementById("ing");

    loginElement.classList = "userU";


    const userStorage = JSON.parse(localStorage.getItem("user"));

    nameLabel.textContent = userStorage.nombre + " " +userStorage.apellido;

    nameLabel.className = "ea link"; 
}

const cerrarLogin = document.getElementById("userU");
cerrarLogin.addEventListener("click", function(e){


    const nameLabel = document.getElementById("userU");

    const loginElement = document.getElementById("ing");
    
    loginElement.style.display = "block";

    nameLabel.className = "userU"; 
    
    localStorage.setItem("logged", JSON.stringify(false));
})