// ==========================
// APJ/LBP - script.js
// ==========================

// Apparition des cartes au défilement
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all .8s ease";
    observer.observe(card);
});

// Animation des boutons
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// Effet sur le menu
const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(link => {

    link.addEventListener("click", function () {

        menuLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

console.log("Bienvenue sur APJ/LBP !");

// Fade-in de la page au chargement
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});
