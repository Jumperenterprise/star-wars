window.addEventListener('scroll', function () {
  const parallax = document.querySelector('.parallaxV')
  const logo = document.querySelector('.logo')
  const img = document.querySelector('.img')
  let scrollPosition = window.pageYOffset

  parallax.style.transform = 'translateY(' + scrollPosition * 0.9 + 'px'
  logo.style.transform = 'translateY(' + scrollPosition * -0.3 + 'px'
})
