// Obtener el botón del menú y el contenedor de enlaces
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Agregar un evento de clic al icono de hamburguesa
menuIcon.addEventListener('click', function() {
    // Alternar la clase 'active' en los enlaces del menú
    navLinks.classList.toggle('active');
});
