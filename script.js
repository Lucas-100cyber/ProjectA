const menu = document.getElementById('menu');
const menus = document.getElementById('menus');

menu.addEventListener('click',()=>{
    menus.classList.add('.active');
});