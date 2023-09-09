const prev = document.querySelector('.arrow__prev');
const next = document.querySelector('.arrow__next');
const sliders = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');

// привести коллекцию к массиву, создав переменную
let slider = Array.from(sliders);
let dotsArr = Array.from(dots);
let slideIndex = slider.findIndex((el)=>el.classList.contains('item__active'));
console.log(slideIndex);

dotsArr[slideIndex].classList.toggle('dot__active');

// функция присвоения активного класса слайду
function getSlider(num) {
    slider[num].classList.toggle('item__active');
    dotsArr[num].classList.toggle('dot__active');
}

// цикл реагирования на нажатие
for (let i = 0; i < dotsArr.length; i++) {
    dotsArr[i].onclick = function () {
        getSlider(i);
        slideIndex = slider.findIndex((el) =>
        el.classList.contains('item__active'));
        getSlider(slideIndex);
    };
}

// функция перелистывания слайдов по нажатию
prev.onclick = function() {
    slideIndex = slider.findIndex((el) =>
    el.classList.contains('item__active')
    );
    getSlider(slideIndex);
    slideIndex=slideIndex===0 ? slider.length -1 : slideIndex -1;
    getSlider(slideIndex);
}