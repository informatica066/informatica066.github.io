 document.addEventListener("DOMContentLoaded", function() {
        const menuIcon = document.querySelector('.menu-icon');
        const navLinks = document.querySelector('.nav-links');

        // Toggle the 'show' class when the menu icon is clicked
        menuIcon.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    });
