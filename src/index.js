import './style.css';
import { pageload } from './pageload';
import { aboutUs } from './about';
import { menu } from './menu';
import { contact } from './contact'
pageload();
aboutUs();

let About = document.getElementById('aboutUs');
let Menu = document.getElementById('menu');
let Contact = document.getElementById('contact')
let main = document.getElementById('tabArea');
  


About.addEventListener('click', ()=>{
    main.innerHTML='';
    About.classList.add('selected')
    Menu.classList.remove('selected')
    Contact.classList.remove('selected')
    aboutUs()
})

Menu.addEventListener('click', ()=>{
    main.innerHTML='';
    About.classList.remove('selected')
    Menu.classList.add('selected')
    Contact.classList.remove('selected')
    menu()
})

Contact.addEventListener('click', ()=>{
    main.innerHTML='';
    About.classList.remove('selected')
    Menu.classList.remove('selected')
    Contact.classList.add('selected')
    contact()
})