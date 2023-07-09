const btnDarkMode = document.querySelector(".dark-mode-btn")  
const titleDark = document.querySelector(".title-1")
const titleDarkSecond = document.querySelector(".subtitle-1")  
const clickDark = document.querySelector(".project-details__info")
const buttonNext = document.querySelector(".slider .next")
const buttonPrevious = document.querySelector(".slider .previous")
const borderCetera = document.querySelector(".project-details__cover-Cetera")
const onclickDark = document.querySelector(".project-details__info")
console.log(onclickDark)

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

if (localStorage.getItem('darkMode') === 'dark'){
    btnDarkMode.classList.toggle("dark-mode-btn--active")
    document.body.classList.toggle("dark")
    titleDark.classList.toggle("title-1--dark");
};

btnDarkMode.onclick=function(){
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark=document.body.classList.toggle("dark");
    if (isDark ){
        localStorage.setItem('darkMode','dark')
    }
    else{
        localStorage.setItem('darkMode','light');
    }
    try{
        titleDark.classList.toggle("title-1--dark");
        onclickDark.classList.toggle("project-details__info-dark");
        borderCetera.classList.toggle("project-details__cover-CeteraDark");
        onclickDark.classList.toggle("project-details__info-dark");
        clickDark.classList.toggle("project-details__info-dark");
        buttonNext.classList.toggle("next-dark");
        buttonPrevious.classList.toggle("previous-dark");
    }
    catch{

    }
   
}
document.querySelector('.setting__btn').addEventListener('click', function() {
document.querySelector('.setting__choose').classList.toggle('setting__choose-active');
})


const input = document.querySelector('input')
const getColor = localStorage.getItem('themeColor')

input.addEventListener('change', function(){
    document.documentElement.style.setProperty('--main-color', input.value)
    localStorage.setItem('themeColor',input.value)
    location.reload(); return false;
})
document.documentElement.style.setProperty('--main-color', getColor)
input.value=getColor

/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    try{
        /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
        let slides = document.getElementsByClassName("slider__item");

        /* Проверяем количество слайдов: */
        if (n > slides.length) {
        slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }

        /* Проходим по каждому слайду в цикле for: */
        for (let slide of slides) {
            slide.style.display = "none";
        }
        /* Делаем элемент блочным: */
        slides[slideIndex - 1].style.display = "block";
    }
    catch{

    }

}

const allImg=document.querySelectorAll(".solution__img")
try{
document.querySelector('.slider__btn-1').addEventListener('click', function() {
    document.querySelector('.solution__img-1').classList.toggle('solution__img-active');
    document.querySelector('.slider__solution-1').classList.toggle('slider__solution-active');
})
document.querySelector('.slider__btn-2').addEventListener('click', function() {
    document.querySelector('.solution__img-2').classList.toggle('solution__img-active');
    document.querySelector('.slider__solution-2').classList.toggle('slider__solution-active');
})
document.querySelector('.slider__btn-3').addEventListener('click', function() {
    document.querySelector('.solution__img-3').classList.toggle('solution__img-active');
    document.querySelector('.slider__solution-3').classList.toggle('slider__solution-active');
})
document.querySelector('.slider__btn-4').addEventListener('click', function() {
    document.querySelector('.solution__img-4').classList.toggle('solution__img-active');
    document.querySelector('.slider__solution-4').classList.toggle('slider__solution-active');
})   
document.querySelector('.slider__btn-5').addEventListener('click', function() {
    document.querySelector('.solution__img-5').classList.toggle('solution__img-active');
    document.querySelector('.slider__solution-5').classList.toggle('slider__solution-active');
})
document.querySelector('.slider__btn-6').addEventListener('click', function() {
    document.querySelector('.solution__img-6').classList.toggle('solution__img-active');
    document.querySelector('.slider__solution-6').classList.toggle('slider__solution-activeSecond');
}) 
document.querySelector('.slider__btn-7').addEventListener('click', function() {
    document.querySelector('.solution__img-7').classList.toggle('solution__img-active');
    document.querySelector('.slider__solution-7').classList.toggle('slider__solution-activeSecond');
})  
document.querySelector('.slider__btn-8').addEventListener('click', function() {
    document.querySelector('.solution__img-8').classList.toggle('solution__img-active');
    document.querySelector('.slider__solution-8').classList.toggle('slider__solution-activeSecond');
})  
document.querySelector('.slider__btn-9').addEventListener('click', function() {
    document.querySelector('.solution__img-9').classList.toggle('solution__img-active');
    document.querySelector('.slider__solution-9').classList.toggle('slider__solution-activeSecond');
})  
}
catch{

}

function progressBar() {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = scroll / height * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
}
window.addEventListener('scroll', progressBar);