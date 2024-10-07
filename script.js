// 'use strict';
let bus = document.querySelector('.imge');
let forward = document.querySelector('.btn-primary');
let revers = document.querySelector('.btn-success');

forward.addEventListener('click', () => {
  bus.style.transform = 'translateX(900px';
});
revers.addEventListener('click', () => {
  bus.style.transform = 'translateX(0';
});
