document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const nav = document.querySelector('.nav');

    // Відслідковуємо клік по бургер-меню
    burgerMenu.addEventListener('click', () => {
        // Додаємо/забираємо клас 'active' для показу/приховування
        nav.classList.toggle('active');
    });
});