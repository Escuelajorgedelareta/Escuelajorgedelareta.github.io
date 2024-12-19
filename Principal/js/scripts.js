window.addEventListener('DOMContentLoaded', event => {
    const navbarShrink = () => {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) return;

        // Detectar si es móvil
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            navbarCollapsible.classList.add('navbar-shrink'); // Mantener oscuro
        } else {
            // Lógica normal en pantallas más grandes
            if (window.scrollY > 50) {
                navbarCollapsible.classList.add('navbar-shrink');
            } else {
                navbarCollapsible.classList.remove('navbar-shrink');
            }
        }
    };

    // Ejecutar función en carga y al hacer scroll
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // Recalcular al cambiar el tamaño de la ventana
    window.addEventListener('resize', navbarShrink);
});

