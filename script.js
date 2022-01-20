const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li')

    burger.addEventListener('click', () => {
        // Toggle Nav  
        nav.classList.toggle('nav-active');
        // Animate Links 
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .2}s`;
            }
        });
        // burger Animation 
        burger.classList.toggle('toggle');
    })


}

navSlide();

// Text Animation 
const text = document.querySelector('.duyen');
const strText = text.textContent;
const splitText = strText.split("");
console.log(splitText)
text.textContent = '';

for (let i = 0; i < splitText.length; i++) {
    text.innerHTMl += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval()
    timer = null;
}