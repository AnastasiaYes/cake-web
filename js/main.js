import {countingTheNumberOfItemsInTheCart} from './cartProducts.js';

countingTheNumberOfItemsInTheCart();

const burger = document.querySelector('.header_burger');
const navMenu = document.querySelector('.container_nav_bottom');

burger.addEventListener('click', mobileMenu);

function mobileMenu() {
    if (burger.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
}

const catalog = document.querySelector('.catalog');
const dropdownDirectory = document.querySelector('.dropdown_directory');

catalog.addEventListener('click', submenu);

function submenu() {
    catalog.classList.toggle('active_submenu');
    dropdownDirectory.classList.toggle('active_submenu');
}

const navLink = document.querySelectorAll('.nav_link');

navLink.forEach(function (el) {
    el.addEventListener('click', function (event) {
        event.stopPropagation();
        closeMenu();
    });
});

function closeMenu() {
    burger.classList.remove('active');
    navMenu.classList.remove('active');
    const activeSubMenu = document.querySelectorAll('.wrapper_nav_bottom .active_submenu');
    for (let i = 0; i < activeSubMenu.length; i++) {
        activeSubMenu[i].classList.remove('active_submenu');
    }
}

function openMenu() {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

document.addEventListener('click', function (evt) {
    if (evt.target.closest('header') === null) {
        closeMenu();
    }
})



