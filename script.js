// Header Tonggle

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');
}

// Carousal 


document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevButtons = document.querySelectorAll(".prev");
    const nextButtons = document.querySelectorAll(".next");
    const dotsContainer = document.querySelector(".carousel-dots");
    let currentIndex = 0;
    let autoSlideInterval;

    // Create dots for navigation
    carouselItems.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);

        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    const dots = document.querySelectorAll(".dot");

    function updateCarousel() {
        // Update active slide
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    function goToPrev() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    function goToNext() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            goToNext();
        }, 5000); // Change slide every 5 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners for buttons
    prevButtons.forEach((button) => button.addEventListener("click", goToPrev));
    nextButtons.forEach((button) => button.addEventListener("click", goToNext));

    // Start automatic sliding
    startAutoSlide();

    // Pause automatic sliding on hover
    const carouselContainer = document.querySelector(".carousel-container");
    carouselContainer.addEventListener("mouseenter", stopAutoSlide);
    carouselContainer.addEventListener("mouseleave", startAutoSlide);

    // Ensure the first slide is visible
    updateCarousel();
});


// dots.forEach((dot, index) => {
//     dot.classList.toggle("active", index === currentIndex);
// });

