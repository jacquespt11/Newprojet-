// script.js

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
  
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  });

