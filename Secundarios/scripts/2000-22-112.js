document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    
    var password = document.getElementById("password").value;
    
    // Comprobar si la contraseña es correcta
    if (password === "developer") {
        window.location.href = "/Secundarios/html/protect.html"; // Redireccionar a la página secreta
    } else {
        document.getElementById("error-message").innerText = "Contraseña incorrecta";
    }
});
