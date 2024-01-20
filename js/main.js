const contactButton = document.querySelector('#contact');
const contactForm = document.querySelector('.contact__form');
const menu_btn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const lang_btn = document.querySelector('.hindi--btn');
lang_btn.addEventListener('click', (e) => {
    console.log(lang_btn.innerText);
    (lang_btn.innerText == "HIN") ? lang_btn.innerText = "ENG" : lang_btn.innerText = "HIN"
})

// const cursor = document.querySelector('.cursor');

// var a = document.querySelectorAll('a');

// document.addEventListener('mousemove', function (e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
// });


// document.addEventListener('mousedown', function () {
//     cursor.classList.add('click');
// });

// document.addEventListener('mouseup', function () {
//     cursor.classList.remove('click')
// });

// a.forEach(item => {
//     item.addEventListener('mouseover', () => {
//         cursor.classList.add('hover');
//     });
//     item.addEventListener('mouseleave', () => {
//         cursor.classList.remove('hover');
//     });
// })

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
