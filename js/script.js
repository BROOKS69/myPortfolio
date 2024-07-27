//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// remove toggle icon & navbar when click navbar links (scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

// Get the body element
const body = document.body;

// Set the body's position to relative
body.style.position = 'relative';

// Set the body's width and height to 100% of the window's width and height
body.style.width = '100vw';
body.style.height = '100vh';

// Set the body's overflow to hidden to prevent scrolling
body.style.overflow = 'hidden';