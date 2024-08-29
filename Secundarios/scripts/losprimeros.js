document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    
    var password = document.getElementById("password").value;
    
    // Comprobar si la contraseña es correcta
    if (password === "losprimeros") {
        window.location.href = "pagina-secreta.html"; // Redireccionar a la página secreta
    } else {
        document.getElementById("error-message").innerText = "Contraseña incorrecta";
    }
});
// Función para abrir/cerrar el menú en móviles
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open');
  }
  
  // Función para hacer que el menú sea sticky
  window.onscroll = function() {
    stickyNavbar();
  };
  
  var navbar = document.querySelector('.navbar');
  var sticky = navbar.offsetTop;
  
  function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  
