//Tive ajuda nessa função :^)
const scrollArrow = document.getElementById('seta');
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY || window.pageYOffset;
    const documentHeight = document.body.scrollHeight - window.innerHeight;
    const hidePoint = documentHeight * 0.8;
    if (scrollY > hidePoint) {
        scrollArrow.style.opacity = '0';
    } else {
        const opacity = 1 - (scrollY / hidePoint);
        scrollArrow.style.opacity = opacity.toFixed(2);
    }
});
function smoothScrollDown() {
    window.scrollBy({
        top: 1200, 
        behavior: 'smooth' 
    });
}

scrollArrow.addEventListener('click', smoothScrollDown);