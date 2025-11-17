const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const profile= document.getElementById('profile');
const menus = document.getElementById('menus');
const cancel = document.getElementById('cancel');
const slides = document.querySelectorAll('.image .slide');
let current = 0;


menu.addEventListener('click',()=>{
    menus.classList.add('active');
});

cancel.addEventListener('click',()=>{
    menus.classList.remove('active');
});

profile.addEventListener('click',()=>{
  overlay.classList.add('active');
  profile.classList.add('active');
  
});

overlay.addEventListener('click',()=>{
  overlay.classList.remove('active');
  profile.classList.remove('active');
  
});

console.log('profile',profile);
console.log('overlay',overlay);



function showNextSlide() {
  slides[current].classList.remove('active'); // hide current
  current = (current + 1) % slides.length;     // next index
  slides[current].classList.add('active');    // show next
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);