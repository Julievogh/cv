// Define the showAboutMe function
function showAboutMe() {
  const smallLinks = document.querySelectorAll(".navbar a:not(.active)");
  smallLinks.forEach((link) => {
    link.classList.toggle("small");
  });

  const aboutMeInfo = document.querySelector(".about_me_info");
  aboutMeInfo.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const aboutMeLink = document.querySelector(".navbar a.active");

  aboutMeLink.addEventListener("click", showAboutMe);
});

function showContactMe() {
  t;
  const contactMe = document.querySelector(".contact_me_info");
  contactMe.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const contactMeLink = document.querySelector(".contact_nav");

  contactMeLink.addEventListener("click", showContactMe);
});

// Slider

const swiper = new Swiper(".swiper", {
  speed: 1000, // Adjust slide transition speed (in milliseconds)
  autoplay: {
    delay: 4000, // Adjust autoplay delay between slides (in milliseconds)
    disableOnInteraction: false,
  },
  // Other configuration options...

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
