const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// const preguntas = document.querySelector('.preguntas');
// const btnQue = document.querySelector('.btnPreg-popup');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

const preguntas = document.querySelector('.preguntas');
const btnQue = document.querySelector('.btnPreg-popup');
const iconCloseq = document.querySelector('.icon-close2');

btnQue.addEventListener('click', ()=> {
    preguntas.classList.add('active-popup');
});

iconCloseq.addEventListener('click', ()=> {
    preguntas.classList.remove('active-popup');
});


const pasiones = document.querySelector('.pasiones');
const btnPas = document.querySelector('.btnPas-popup');
const iconClosep = document.querySelector('.icon-close3');

btnPas.addEventListener('click', ()=> {
    pasiones.classList.add('active-popup');
});

iconClosep.addEventListener('click', ()=> {
    pasiones.classList.remove('active-popup');
});


const acerca = document.querySelector('.acerca');
const btnAb = document.querySelector('.btnAce-popup');
const iconCloseA = document.querySelector('.icon-close4');

btnAb.addEventListener('click', ()=> {
    acerca.classList.add('active-popup');
});

iconCloseA.addEventListener('click', ()=> {
    acerca.classList.remove('active-popup');
});
