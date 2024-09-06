// sticky Navigation
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  
// Ham Menu
const hamMenu = document.querySelector(".menu");
const offMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offMenu.classList.toggle("active");
});

// Pre-Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".preloader");

  loader.classList.add("preloader_hidden");

  loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader");
  })
});

// Hamburger Menu Dropdown
function toggleDropdown() {
    var dropdownContent = document.querySelector('.menu_down');
    dropdownContent.classList.toggle('show');
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.querySelectorAll('.menu_down');
        dropdowns.forEach(function(dropdown) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
}

// Get Quote Form
// Get the modal
const quoteForm = document.getElementById('quoteForm');

// Get the button that opens the modal
const quoteBtn = document.querySelectorAll('.quote_btn, .quote_btn_ham');

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName('close_btn')[0];

// When the user clicks the button, open the modal 
quoteBtn.forEach(btn => {
    btn.onclick = function(event) {
        event.preventDefault();
        quoteForm.style.display = 'block';
    };
});

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    quoteForm.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == quoteForm) {
        quoteForm.style.display = 'none';
    }
};