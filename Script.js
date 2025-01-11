const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll('.navigation a');
const emailInput = document.getElementById('emailInput');
const submitEmail = document.getElementById('submitEmail');
const emailWarning = document.getElementById('emailWarning');
const okButton = document.getElementById('okButton');

if (menuIcon) {
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("change");
        menuIcon.setAttribute('aria-expanded', navbar.classList.contains('change'));
        document.body.classList.toggle('no-scroll', navbar.classList.contains('change'));
    });
}

if (navLinks) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('change');
            menuIcon.setAttribute('aria-expanded', false);
            document.body.classList.remove('no-scroll');
        });
    });
}

