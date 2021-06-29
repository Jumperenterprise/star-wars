

window.addEventListener('scroll', function () {
  const parallax = document.querySelector('.parallax')
  const logo = document.querySelector('.logo')
  let scrollPosition = window.pageYOffset;

  parallax.style.transform = 'translateY(' + scrollPosition * .9 + 'px';
  logo.style.transform = 'translateY(' + scrollPosition * .2 + 'px';
})

