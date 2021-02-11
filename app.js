const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksList = document.querySelectorAll('.nav-links-list li');
// let counter = 0;
burger.addEventListener('click',()=>{
  //Toggle Nav
  navLinks.classList.toggle('nav-active');
  //Animate Links
  navLinksList.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
    }
  });
  burger.classList.toggle('toggle');
})