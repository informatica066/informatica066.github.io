document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');  // Selecciona el icono del menú (hamburguesa)
    const navLinks = document.querySelector('.nav-links');  // Selecciona los enlaces de navegación

    // Añade el evento de clic al icono del menú
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');  // Alterna la clase 'show' para mostrar/ocultar el menú
    });
});
