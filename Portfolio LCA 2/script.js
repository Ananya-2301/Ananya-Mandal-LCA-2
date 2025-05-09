// HOME PAGE 
window.addEventListener('DOMContentLoaded', function () {
  const heroSection = document.getElementById('heroSection');
  if (heroSection && heroSection.classList.contains('hero')) {
    heroSection.classList.add('visible');
  }

  const hireButton = document.getElementById('hireBtn');
  if (hireButton) {
    hireButton.addEventListener('click', function (e) {
      e.preventDefault();
      alert("Thanks for your interest! Let's connect.");});
    
  }

  
  document.addEventListener('keydown', function (e) {
    if (e.key === 'h' && heroSection) {
      heroSection.classList.toggle('highlighted');
    }
  });
});


// TICKER STRIP
const tickerContent = document.getElementById('tickerContent');
const duplicateContent = tickerContent.innerHTML;
tickerContent.innerHTML += duplicateContent;

const tickerStrip = document.getElementById('tickerStrip');

tickerStrip.addEventListener('mouseenter', function () {
  tickerContent.style.animationPlayState = 'paused';
});

tickerStrip.addEventListener('mouseleave', function () {
  tickerContent.style.animationPlayState = 'running';
});


// TESTIMONIAL SECTION
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const cards = document.querySelectorAll(".card");
  var currentIndex = 1;

  function updateCarousel() {
    cards.forEach(function (card, index) {
      card.classList.remove("active", "faded");
      if (index === currentIndex) {
        card.classList.add("active");
      } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
        card.classList.add("faded");
      } else if (index === (currentIndex + 1) % cards.length) {
        card.classList.add("faded");
      }
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  }

  setInterval(nextTestimonial, 1000);
  updateCarousel();
});



  
  
  
  
  