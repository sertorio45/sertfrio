
// gscard animation
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.gscard');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing once animated
          }, Math.random() * 1000); // Random delay between 0 and 1000ms
        }
      });
    }, {
      threshold: 0.1 // Adjust this value as needed
    });
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });





