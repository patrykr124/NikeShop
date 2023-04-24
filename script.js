'use strict';


const menuTrigger = document.querySelector('.trigger');
const closeTrigger = document.querySelector('.mini-close');
const giveClass = document.querySelector('.site');

menuTrigger.addEventListener('click', function () {
    giveClass.classList.toggle('showmenu')
})
closeTrigger.addEventListener('click', function () {
    giveClass.classList.remove('showmenu')
});

const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

menuItems.forEach((item, index) =>{
    item.addEventListener('click', () =>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});