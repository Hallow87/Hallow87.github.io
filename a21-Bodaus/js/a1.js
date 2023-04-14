const slideshow = document.querySelector('.slideshow');
const slides = slideshow.querySelectorAll('img');
const prevButton = slideshow.querySelector('.prev');
const nextButton = slideshow.querySelector('.next');
let currentSlide = 0;

// Hide all slides except the first one
for (let i = 1; i < slides.length; i++) {
  slides[i].style.display = 'none';
}

// Function to show the current slide
function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  slides[n].style.display = 'block';
  currentSlide = n;
}

// Event listener for previous button
prevButton.addEventListener('click', function() {
  if (currentSlide === 0) {
    showSlide(slides.length - 1);
  } else {
    showSlide(currentSlide - 1);
  }
});

// Event listener for next button
nextButton.addEventListener('click', function() {
  if (currentSlide === slides.length - 1) {
    showSlide(0);
  } else {
    showSlide(currentSlide + 1);
  }
});
