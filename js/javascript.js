// jQuery(".menu-toggle button").on("click", function () {
//   jQuery(".menu-wrap").toggleClass("active");
// });

// function createVerticalSlider(sliderId, direction = "down", speed = 10) {
//   const slider = document.getElementById(sliderId);
//   const slides = Array.from(slider.children);
//   const slideHeight = slides[0].offsetHeight;

//   // Duplicate slides for smooth looping
//   slider.innerHTML += slider.innerHTML;

//   let position = direction === "down" ? -slideHeight * slides.length : 0;

//   function scrollSlides() {
//     if (direction === "down") {
//       position += 1;
//       if (position >= 0) position = -slideHeight * slides.length;
//     } else {
//       position -= 1;
//       if (position <= -slideHeight * slides.length) position = 0;
//     }

//     slider.style.transform = `translateY(${position}px)`;
//     slider.style.transition = `transform 0.02s linear`;
//   }

//   setInterval(scrollSlides, speed);
// }

// // Initialize sliders
// createVerticalSlider("slider1", "down", 10); // Slider scrolling top to bottom
// createVerticalSlider("slider2", "up", 10); // Slider scrolling bottom to top

// const prevButton = document.querySelector(".prev");
// const nextButton = document.querySelector(".next");
// const slides = document.querySelectorAll(".slide");
// let currentIndex = 0;

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.remove("active");
//     if (i === index) {
//       slide.classList.add("active");
//     }
//   });
// }

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  let currentIndex = 0;

  const maxIndex = Math.min(slides.length - 1, 2); // Limit to 3 slides (0 to 3)

  const updateSliderPosition = () => {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  nextBtn.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSliderPosition();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });
});
