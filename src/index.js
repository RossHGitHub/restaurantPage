import './style.css';

let main = document.getElementById('content');
main.classList='mainBackground';
let header = document.createElement('div');

let pizzaImg = document.createElement('img');
pizzaImg.src = '../img/pizza.jpg'

header.appendChild(pizzaImg);

let title = document.createElement('h1');
title.innerHTML='Test';

main.appendChild(title);
main.appendChild(header);