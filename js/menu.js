const d = document;

const $menu = d.querySelector('.menu');

d.addEventListener('click', e=>{
   if(e.target.matches('.hamburger')){
       $menu.classList.toggle('mostrar');
   }
});