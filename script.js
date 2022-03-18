let header = document.getElementById("header");
let navBars = document.getElementById("nav-bars");
let navMenu = document.getElementById("nav-menu")
navBars.addEventListener("click", () => {
    if (navBars.classList.contains("uil-bars")) {
        navBars.classList.remove("uil-bars");
        navBars.classList.add("uil-multiply");
    } else {
        navBars.classList.add("uil-bars");
        navBars.classList.remove("uil-multiply");
    }
    navMenu.classList.toggle("display-initial");
})

// TESTIMONIALS SWIPER

const swiper = new Swiper('.testimonials__container', {
    spaceBetween: 40,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
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
