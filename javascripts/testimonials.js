let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active', 'fade-out');
        if (i === index) {
            testimonial.classList.add('active');
        } else if (testimonial.classList.contains('active')) {
            testimonial.classList.add('fade-out');
            setTimeout(() => testimonial.classList.remove('active', 'fade-out'), 500);
        }
    });
}

function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
}

function prevTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
}

// Auto-rotate testimonials every 5 seconds
setInterval(nextTestimonial, 5000);

// Initialize the first testimonial
showTestimonial(currentTestimonialIndex);
