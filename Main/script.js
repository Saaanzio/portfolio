const scrollArrow = document.getElementById('seta');
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY || window.pageYOffset;
    const hidePoint = window.innerHeight / 2;

    if (scrollY > hidePoint) {
        scrollArrow.style.opacity = '0';
    } else {
        scrollArrow.style.opacity = '1';
    }
});