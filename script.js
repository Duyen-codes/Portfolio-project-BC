const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li')

    burger.addEventListener('click', () => {
        // Toggle Nav  
        burger.style.border = '1px dotted red';
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

// Hide or show the scroll button
const scrollBtn = document.querySelector('.scroll-to-top');

const scrollButtonVisibility = () => {
    if (document.documentElement.scrollTop <= 150) {
        scrollBtn.style.display = 'none';
    } else {
        scrollBtn.style.display = 'block';
    }
}

scrollButtonVisibility();

// Scroll to top
scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
function scrollToTop() {
    window.scrollTo(0, 0);
}

// Hide or show the scroll button 
document.addEventListener('scroll', (e) => {
    scrollButtonVisibility();
})
// Text Animation
// const text = document.querySelector('.duyen');
// const strText = text.textContent;
// const splitText = strText.split("");
// console.log(splitText)
// text.textContent = '';

// for (let i = 0; i < splitText.length; i++) {
//     text.innerHTMl += "<span>" + splitText[i] + "</span>";
// }

// let char = 0;
// let timer = setInterval(onTick, 50);

// function onTick() {
//     const span = text.querySelectorAll('span')[char];
//     span.classList.add('fade');
//     char++;
//     if (char === splitText.length) {
//         complete();
//         return;
//     }
// }

// function complete() {
//     clearInterval()
//     timer = null;
// }