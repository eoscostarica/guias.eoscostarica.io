
function setLang(){
    document.documentElement.lang="es";
    
    var alternative = document.createElement('link');    
    alternative.rel = 'alternative';
    alternative.hreflang = 'en';
    alternative.href = 'guide.eoscostarica.io';
    document.getElementsByTagName('head')[0].appendChild(alternative);
}

window.addEventListener('load', ()=> {
    setLang();
})