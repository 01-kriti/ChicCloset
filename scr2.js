document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.category-slider-container');
    const slides = document.querySelectorAll('.category-slide');
    const prevButton = document.querySelector('.slider-arrow-left');
    const nextButton = document.querySelector('.slider-arrow-right');
    let currentIndex = 0;
  
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 25}%)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % (slides.length - 3);
      updateSlider();
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length - 3) % (slides.length - 3);
      updateSlider();
    }
  
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  });