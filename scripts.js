// JavaScript para el menú hamburguesa
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Función para alternar el estado del menú
menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('active'); // Alternar la clase 'active' en los enlaces del menú
});
