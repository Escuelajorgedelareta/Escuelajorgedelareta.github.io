document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    
    var password = document.getElementById("password").value;
    
    // Comprobar si la contraseña es correcta
    if (password === "losprimeros") {
        window.location.href = "pagina-secreta.html"; // Redireccionar a la página secreta
    } else {
      document.getElementById("error-message").innerText = "Contraseña incorrecta";
  }

if (password ==="benja"){
  window.location.href = "https://www.instagram.com/benja_sv0181?igsh=aHlreHFwY3Bsc25w";
}
if(password ==="web"){
window.location.href = "https://l.instagram.com/?u=https%3A%2F%2Fsantiago235v902.github.io%2FWebStudioCreation.com%2Findex.html%3Ffbclid%3DPAAaajd6gfX2lRKVj9NZYctWQ4-yTybtBZNEQUvMCS1VY3EOHIThWMKpfzILs&e=AT3Za4ro4pv23V71Mw9JFpQ_WscdGiqJdVBvcKH3vgH-riYUbXfuj-P1xTs2NBGF7mSLa7qjfBpSF6fYA4Ujrn5Q4Cb-H4v2hnLCTeI";
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
  
