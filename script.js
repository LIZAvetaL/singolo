const MENU=document.getElementById('menu');
MENU.addEventListener('click', (event)=>{
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

const anchors=document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors){
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        const blockID= anchor.getAttribute('href');
        document.querySelector(''+ blockID).scrollIntoView(
            {behavior:'smooth', block: 'start'});
    })
}

/*---Slider---*/
let slider = document.getElementsByClassName("slider");
const ARROW_RIGHT=document.querySelector('.arrow_right');
const ARROW_LEFT=document.querySelector('.arrow_left');
var slideIndex = 1;
showSlides(slideIndex);

ARROW_LEFT.addEventListener('click', function (e) {
    plusSlides(-1);
    if (slider[0].classList[1] == "blue") {
        slider[0].classList.remove('blue');
    }
    else { slider[0].classList.add('blue'); }
});
ARROW_RIGHT.addEventListener('click', function (e) {
    plusSlides(1);
    if (slider[0].classList[1] == "blue") {
        slider[0].classList.remove('blue');
    }
    else { slider[0].classList.add('blue'); }
});

function plusSlides(n) {

    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("phones_img");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

/*-------Phones---------*/
const DISPLAY_VERTICAL=document.getElementById('rectangle1');
const PHONE_VERTICAL=document.querySelector('.vertical');
PHONE_VERTICAL.addEventListener('click', function (e) {
    if(DISPLAY_VERTICAL.classList=='none')
    DISPLAY_VERTICAL.classList.remove('none');
    else DISPLAY_VERTICAL.classList.add('none');
});

const DISPLAY_GORIZONT=document.getElementById('rectangle2');
const PHONE_GORIZONT=document.querySelector('.gorizont');
PHONE_GORIZONT.addEventListener('click', function (e) {
    if(DISPLAY_GORIZONT.classList=='none')
    DISPLAY_GORIZONT.classList.remove('none');
    else DISPLAY_GORIZONT.classList.add('none');
});

/*------PORTFOLIO--IMG--Border---*/
 const img=document.querySelector('.flex-portfolio')
 img.addEventListener('click', (event)=>{
    img.querySelectorAll('img').forEach(el => el.classList.remove('border'));
    event.target.classList.add('border');
});

/*-----PORTFOLIO-TAG---*/
const FILTER = document.querySelector('.portfolio-tags');

FILTER.addEventListener('click', (event) => {
    FILTER.querySelectorAll('.tag').forEach(element => element.classList.remove('activv'));
    event.target.classList.add('activv');

    document.querySelector('.flex-portfolio').querySelectorAll('.portfolio-img').forEach(element => {        
         element.style.order = Math.floor(1 + Math.random() * 12);        
    });
});

/*----FORMA-----*/
const FORM = document.getElementById('form-elem');
const FORMSUBJECT = document.querySelector('.input-subject');
const FORMDESC = document.querySelector('.input-desc');
const MODAL = document.querySelector('.modal-overlay');

FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    MODAL.hidden = false;

    if (!FORMSUBJECT.value) MODAL.querySelector('.modal p:nth-child(2)').insertAdjacentHTML('beforeend', '<span id = "theme-in-modal">Без темы</span>');
    else {
        MODAL.querySelector('.modal p:nth-child(2)').insertAdjacentHTML('beforeend', `<span id = "theme-in-modal"><strong>Тема: </strong>${FORMSUBJECT.value}</span>`);
    }

    if (!FORMDESC.value) MODAL.querySelector('.modal p:nth-child(3)').insertAdjacentHTML('beforeend', '<span id = "desc-in-modal">Без описания</span>');
    else {
        MODAL.querySelector('.modal p:nth-child(3)').insertAdjacentHTML('beforeend', `<span id = "desc-in-modal"><strong>Описание: </strong>${FORMDESC.value}</span>`);
    }
});

const OKBTN = document.getElementById('ok-btn');

OKBTN.addEventListener('click', function(event) {
    MODAL.hidden = true;
    MODAL.querySelector('#theme-in-modal').remove();
    MODAL.querySelector('#desc-in-modal').remove();
}) 