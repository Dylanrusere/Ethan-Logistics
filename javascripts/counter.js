function animateCounter(id, start, end, duration) {
  let obj = document.getElementById(id);
  let range = end - start;
  let stepTime = Math.abs(Math.floor(duration / range));
  let startTime = new Date().getTime();
  let endTime = startTime + duration;
  let timer;

  function run() {
      let now = new Date().getTime();
      let remaining = Math.max((endTime - now) / duration, 0);
      let value = Math.round(end - (remaining * range));
      obj.innerHTML = value;
      if (value == end) {
          clearInterval(timer);
      }
  }

  timer = setInterval(run, stepTime);
  run();
}

// Initialize Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          // Start counters when the section is in view
          animateCounter('counter_clients', 0, 120, 2000);
          animateCounter('counter_deliveries', 0, 200, 2000);
          animateCounter('counter_countries_covered', 0, 6, 2000);
          // Unobserve the section after animation starts
          observer.unobserve(entry.target);
      }
  });
}, {
  threshold: 0.5 // Adjust threshold as needed
});

// Observe the counter section
document.addEventListener('DOMContentLoaded', function() {
  const counterSection = document.getElementById('counter');
  observer.observe(counterSection);
});