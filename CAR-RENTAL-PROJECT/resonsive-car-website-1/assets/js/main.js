// ============= LOADER ===========================
document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('.loader').style.display = 'none';
	document.querySelector('#content').style.display = 'block';
});
// ============= HEADER NAV MENU ===========================
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});
//EMAIL VALIDATION =========================================
document.getElementById("subscribe-btn").addEventListener("click",validateAndAnimate)
function validateAndAnimate() {
    const emailInput = document.getElementById("emailInput");
    const errorText = document.getElementById("errorText");

    const email = emailInput.value;

    if (validateEmail(email)) {
        // Email is valid
        emailInput.style.border = "2px solid green";
        errorText.style.display = "none";
        // Animation
        emailInput.style.transition = "all 0.5s";
        emailInput.style.transform = "translateX(20px)";
        setTimeout(function() {
            emailInput.style.transform = "translateX(0)";
        }, 500);
    } else {
        // Email is invalid
        emailInput.style.border = "2px solid red";
        errorText.style.display = "block";
        // Animation
        emailInput.style.transition = "all 0.5s";
        emailInput.style.transform = "translateX(-20px)";
        setTimeout(function() {
            emailInput.style.transform = "translateX(0)";
        }, 500);
    }
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}
// CHANGE THE BACKGROUND ON SCROLL =========================
function changeHeaderColor() {
    const header = document.getElementById("header");

    if (this.scrollY >= 200) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", changeHeaderColor);

// REMOVE MENU ON CLICK FOR MOBILE =========================
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));

// ACTIVE SECTION LINK ============================
const sections = document.querySelectorAll("section[id");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

// ========== SWIPER JS ===================
var swiper = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 48,
        },
    },
});



/* Link active products */
const linkProduct = document.querySelectorAll(".product__item");

function activeProduct() {
    linkProduct.forEach((link) => link.classList.remove("active-product"));
    this.classList.add("active-product");
}
linkProduct.forEach((link) => link.addEventListener("click", activeProduct));

// ============= SCROLLUP ============
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");

    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// ============= SCROLL REBVEAL JS ==========
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
});

sr.reveal(".home-sub");
sr.reveal(".home__title", {
    delay: 500
});

sr.reveal(".home__description", {
    delay: 600
});

sr.reveal(".home-btn", {
    delay: 700
});

sr.reveal(".home__value-number, .home__value-description", {
    delay: 800,
    interval: 100,
});

sr.reveal(".line-h", {
    delay: 800
});

sr.reveal(".home__img", {
    delay: 900,
    origin: "bottom"
});

sr.reveal(".about__data", {
    origin: "right"
});

sr.reveal(".about__img", {
    origin: "left"
});

sr.reveal(".brands__content", {
    interval: 100
});

sr.reveal(".why__data");

sr.reveal(".popular h2");
sr.reveal(".popular__cards", {
    delay: 500,
    origin: "right"
});

sr.reveal(".newsletter__data", {
    origin: "bottom"
});

sr.reveal(".product__subtitle");
sr.reveal(".products h2", {
    delay: 500
});

sr.reveal(".product__filters", {
    delay: 600
});

sr.reveal(".product__card", {
    delay: 700,
    interval: 100
});

sr.reveal(".app__container", {
    origin: "bottom"
});

sr.reveal(".app__data", {
    delay: 500,
    origin: "left"
});

sr.reveal(".app__img", {
    delay: 600,
    origin: "right"
});

sr.reveal(".footer-box", {
    interval: 100
});

sr.reveal(".copyright", {
    delay: 500
});