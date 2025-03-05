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
        span.textContent = `${value}%`;  // Perbaikan: menggunakan backticks
      });
    });
});

// Menangani pengiriman form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman default
    this.reset(); // Mereset form
    window.location.href = "thanks.html"; // Redirect ke halaman terima kasih
});
