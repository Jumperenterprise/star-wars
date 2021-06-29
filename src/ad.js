window.addEventListener('scroll', function () {
    const ad = document.querySelector('publicidad__img')

    let adPosition = window.pageYOffset;

    if(adPosition == 646){
    ad.style.transform = 'translateY(' + adPosition * .5 + 'px';
    }
})