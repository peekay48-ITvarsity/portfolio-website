/* ================================
MOBILE MENU
================================ */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");

if (navLinks.classList.contains("active")) {
    menuBtn.textContent = "✕";
} else {
    menuBtn.textContent = "☰";
}

});

/* ================================
CLOSE MENU AFTER CLICK
================================ */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
link.addEventListener("click", () => {
navLinks.classList.remove("active");
menuBtn.textContent = "☰";
});
});

/* ================================
CONTACT FORM
================================ */

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function(event) {

event.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

if (!name || !email || !message) {
    formMessage.textContent = "Please complete all fields.";
    return;
}

formMessage.textContent =
    "Thank you! Your message has been received.";

contactForm.reset();

});

/* ================================
SCROLL REVEAL ANIMATION
================================ */

const animatedElements = document.querySelectorAll(
".section-title, .about-card, .about-text, .skill-card, .project-card, .service-card, .contact-info, .contact-form"
);

animatedElements.forEach(element => {
element.classList.add("hidden");
});

const observer = new IntersectionObserver(
entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);
        }

    });

},
{
    threshold: 0.15
}

);

animatedElements.forEach(element => {
observer.observe(element);
});

/* ================================
CURRENT YEAR
================================ */

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
footerText.textContent =
© ${2026} My Portfolio. All rights reserved.;
}