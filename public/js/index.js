const btnMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');
const body = document.querySelector('body')

btnMenu.addEventListener("click", ()=>{
    btnMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('active');
})


const btnCart   = document.querySelector('.bagLogo');
const cartMenu  = document.querySelector('.cart');
const closeCart = document.querySelector('.cartClose');


btnCart.addEventListener('click', () => {
    cartMenu.classList.toggle('active');
    navMenu.classList.remove('active');
    btnMenu.classList.remove('active');
});

closeCart.addEventListener('click', () => {
    cartMenu.classList.remove('active');
})