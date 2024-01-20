const contactButton = document.querySelector('#contact');
const contactForm = document.querySelector('.contact__form');
const menu_btn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const lang_btn = document.querySelector('.hindi--btn');
lang_btn.addEventListener('click',(e)=>{
   console.log(lang_btn.innerText);
   (lang_btn.innerText == "HIN") ? lang_btn.innerText = "ENG" : lang_btn.innerText = "HIN"
})

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (dets) => {
    cursor.style.left = (dets.x + -10) +  'px';
    cursor.style.top = (dets.y + -10) + 'px';
    cursor.style.zIndex = "1"
});

window.onload = function () {
    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });

    contactButton.addEventListener('click', function () {
        contactButton.classList.toggle('is-active');
        contactForm.classList.toggle('is-active');
    });
};
