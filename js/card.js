const cardHover1 = function(){
    const div = document.querySelector(".js-card1");
    const iconOnderhoud = document.querySelector(".js-icon-onderhoud2");

    div.addEventListener('mouseenter', () => iconOnderhoud.style.opacity=1);
    div.addEventListener('mouseleave', () => iconOnderhoud.style.opacity=0);
}
const cardHover2 = function() {
    
    const div = document.querySelector(".js-card2");
    const iconOnderhoud = document.querySelector(".js-icon-depannage2");

    div.addEventListener('mouseenter', () => iconOnderhoud.style.opacity=1);
    div.addEventListener('mouseleave', () => iconOnderhoud.style.opacity=0);
}
const cardHover3 = function() {
    
    const div = document.querySelector(".js-card3");
    const iconOnderhoud = document.querySelector(".js-icon-installatie2");

    div.addEventListener('mouseenter', () => iconOnderhoud.style.opacity=1);
    div.addEventListener('mouseleave', () => iconOnderhoud.style.opacity=0);
}
const init = function(){
    cardHover1();
    cardHover2();
    cardHover3();
}

document.addEventListener("DOMContentLoaded", init); 
