const bar = document.querySelector('.bar');
const content = document.querySelector('.content');
const nav = document.querySelector('.nav');

bar.addEventListener('click', function(){
content.classList.toggle('nav-content');
})

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () =>{
    if(lastScrollY < window.scrollY){
        nav.classList.add('nav-hidden')
    }
    else{
        nav.classList.remove('nav-hidden')
    }
    lastScrollY = window.scrollY
})