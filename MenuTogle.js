const menuToggle = document.querySelector('.menu-toggle');
const bars = document.querySelectorAll('.bar');

menuToggle.addEventListener('click', function() {
  bars.forEach(bar => bar.classList.toggle('change'));
});
