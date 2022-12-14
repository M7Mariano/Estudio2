const mobileBtn = document.querySelector(".mobile-btn");
const closeBtn = document.querySelector(".close-menu");

// Funções

function toggleMenuMobile() {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}

function closeMenu() {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}

// Eventos

mobileBtn.addEventListener("click", toggleMenuMobile);

closeBtn.addEventListener("click", closeMenu);