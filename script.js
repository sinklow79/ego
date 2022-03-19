let header = document.getElementById("header");
let navBars = document.getElementById("nav-bars");
let navMenu = document.getElementById("nav-menu");
let navItems = document.querySelectorAll(".nav__item");
navBars.addEventListener("click", () => {
    if (navBars.classList.contains("uil-bars")) {
        navBars.classList.remove("uil-bars");
        navBars.classList.add("uil-multiply");
        navMenu.classList.add("display-initial");
        navItems.forEach(navItem => navItem.classList.remove("animation"));
        navMenu.classList.remove("animation-none");
    } else {
        navMenu.classList.add("animation-none");
        navBars.classList.add("uil-bars");
        navBars.classList.remove("uil-multiply");
        navItems.forEach(navItem => navItem.classList.add("animation"));
        setTimeout(() => {
            navMenu.classList.remove("display-initial")
        }, 350);
    }
    header.classList.toggle("opacity-1");
})

// TESTIMONIALS SWIPER

const swiper = new Swiper('.testimonials__container', {
    spaceBetween: 40,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
            spaceBetween: 10,
        }
    }
});

// NAVBAR BACKGROUND WHEN SCROLLS DOWN

window.addEventListener("scroll", () => {
    let verticalScroll = window.scrollY;
    if (scrollY >= 30) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
})
