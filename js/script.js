let navbar = document.querySelector('.navbar');
let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
    cartItem.classList.remove('active');
}
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.add('active');
    navbar.classList.remove('active');
}
