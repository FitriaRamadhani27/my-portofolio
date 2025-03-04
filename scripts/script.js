// Ambil elemen burger dan menu
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('nav ul');

// Ketika burger menu diklik, toggle class "active" pada menu
burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('input[type="range"]');
    
    skills.forEach(function(skill) {
      skill.addEventListener('input', function(e) {
        const value = e.target.value;
        const span = e.target.nextElementSibling;
        span.textContent = ${value}%;  // Perbaiki disini dengan backticks
      });
    });
});

window.location.href = "thanks.html";

document.getElementById("contactForm").reset();
