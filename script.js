let slideIndex = 0;
let scrollAmount = 0;
const scrollStep = 270; // Adjust based on image size
const servicesContainer = document.querySelector('.services');

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');

    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && !event.target.closest('.mobile-menu-btn')) {
            navMenu.classList.remove('show');
        }
    });

    // Close menu when window is resized beyond mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('show');
        }
    });
});

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function slideRight() {
    const maxScroll = servicesContainer.scrollWidth - servicesContainer.clientWidth;
    scrollAmount += scrollStep;
    if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll;
    }
    servicesContainer.style.transform = `translateX(-${scrollAmount}px)`;
}

document.addEventListener("DOMContentLoaded", showSlides);
