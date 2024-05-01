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
//Não é efetivo nem bonito, porém a outra solução não está funcionando!!! (consertarei ASAP)
function botaoProjeto(x){
    var URL;
    switch (x){
        case 1:
            URL = "https://github.com/TIAW2023/projetotiaw-alunos-do-site-sobre-jogos.git"
            break;
        case 2:
            URL = "https://github.com/Pedro-Resende-VEVO/Extensao-Igreja_Renovar.git";
            break;
        case 3:
            URL ="https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2024-1-projeto-euler.git";
            break;
        case 4:
            URL ="https://github.com/Saaanzio/PaginaLoginRegistro.git";
            break;
        case 5:
            URL ="https://github.com/Saaanzio/Mine-Sweeper.git";
            break;
        case 6:
            URL ="https://github.com/Saaanzio/portifolio.git";
        default:
            break;
    }
    window.open(URL,'_blank')

}