// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('header nav');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Optional: Close nav menu if clicked outside on mobile
    document.addEventListener('click', (event) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
});