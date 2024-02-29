// Define the showAboutMe function
function showAboutMe() {
  // Hide other links
  const smallLinks = document.querySelectorAll(".navbar a:not(.active)");
  smallLinks.forEach((link) => {
    link.classList.toggle("small");
  });

  // Toggle visibility of the "About Me" content
  const aboutMeInfo = document.querySelector(".about_me_info");
  aboutMeInfo.classList.toggle("show");
}

// Add event listener when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the "ABOUT ME" link
  const aboutMeLink = document.querySelector(".navbar a.active");

  // Attach click event listener to the "ABOUT ME" link
  aboutMeLink.addEventListener("click", showAboutMe);
});

// Define the showContactMe function
function showContactMe() {
  // Toggle visibility of the "Contact Me" content
  const contactMe = document.querySelector(".contact_me_info");
  contactMe.classList.toggle("show");
}

// Add event listener when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the "CONTACT" link
  const contactMeLink = document.querySelector(".contact_nav");

  // Attach click event listener to the "CONTACT" link
  contactMeLink.addEventListener("click", showContactMe);
});

// Slider

const swiper = new Swiper(".swiper", {
  speed: 1000, // Adjust slide transition speed (in milliseconds)
  autoplay: {
    delay: 3000, // Adjust autoplay delay between slides (in milliseconds)
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
