const menuToggle = document.querySelector('.menu-toogle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav ul li a[data-target]");
  
    sections.forEach(function (section) {
      let top = section.offsetTop;
      let bottom = top + section.offsetHeight;
  
      if (window.pageYOffset >= top && window.pageYOffset < bottom) {
        navLinks.forEach(function (link) {
          if (link.getAttribute("data-target") === section.id) {
            link.classList.add("link-active");
          } else {
            link.classList.remove("link-active");
          }
        });
      }
    });
  });