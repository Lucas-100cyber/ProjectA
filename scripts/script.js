const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const menus = document.getElementById('menus');
const cancel = document.getElementById('cancel');
const slides = document.querySelectorAll('.image .slide');
const events = document.getElementById('events');
const explore = document.getElementById('explore');
const items = document.querySelectorAll('.wrapper');
const dots =document.querySelectorAll('.dot .dots');
const questions = document.querySelectorAll('.ask .q');
const yes = document.getElementById('yes');
const no =document.getElementById('no');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  })
});
let current = 0;
let active_dot=0;


menu.addEventListener('click',()=>{
  
    menus.classList.add('active');
});

cancel.addEventListener('click',()=>{
    menus.classList.remove('active');
});

overlay.addEventListener('click',()=>{
  overlay.classList.remove('active');
  explore.classList.remove('active');
  
});

events.addEventListener('click',()=>{
  explore.classList.toggle('active');
  overlay.classList.add('active');
});

console.log('events',events);
console.log('explore',explore);
console.log('observer', observer);
console.log('items', items);



function showNextSlide() {
  slides[current].classList.remove('active'); // hide current
  current = (current + 1) % slides.length;     // next index
  slides[current].classList.add('active');    // show next
}

// Change slide every 3 seconds
setInterval(showNextSlide, 5000);


let isDragging = false;

cancel.addEventListener("mousedown", () => {
    isDragging = true;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        cancel.style.left = e.pageX + "px";
        cancel.style.top = e.pageY + "px";
    }
});

items.forEach(item=>{
  observer.observe(item);
});

yes.addEventListener('click',()=>{
  console.log('yes clicked');
  dots[active_dot].classList.remove('active');
  questions[active_dot].classList.remove('active');
  active_dot +=1;
  
  questions[active_dot].classList.add('active');
  dots[active_dot].classList.add('active');
});

no.addEventListener('click',()=>{
  console.log('no clicked');
  dots[active_dot].classList.remove('active');
  questions[active_dot].classList.remove('active');
  active_dot +=1;
  if(active_dot==5){
    window.location='#';
  }
  
  questions[active_dot].classList.add('active');
  dots[active_dot].classList.add('active');
});
