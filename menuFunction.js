// Hamburger button functionality
const hamburgerButton = document.querySelectorAll('.hamburger-btn');
const closeCross = document.querySelectorAll('.close-cross');

function toggleMenu() {
  document.querySelectorAll('.nav-items').forEach((element) => {
    element.classList.toggle('open-nav');
  })
}

hamburgerButton.forEach((element) => {
    element.addEventListener('click', toggleMenu);
})
closeCross.forEach((element) => {
    element.addEventListener('click', toggleMenu);
})
