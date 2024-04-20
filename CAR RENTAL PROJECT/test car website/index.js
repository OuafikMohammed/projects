const logos = document.querySelectorAll('.car-logos img');

logos.forEach(logo => {
  logo.addEventListener('mouseover', () => {
    logo.style.filter = 'brightness(50%)';
  });

  logo.addEventListener('mouseout', () => {
    logo.style.filter = 'brightness(100%)';
  });
});