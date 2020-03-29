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
let phones = document.querySelectorAll('.phones');
let currentSlide = 0;
let isEnabled = true;

function changeCurrentSlide (n) {
    currentSlide = ( n + phones.length ) % phones.length;    
}

function hideSlide(direction) {
    isEnabled = false; 
    phones[currentSlide].classList.add(direction);
    phones[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('activated', direction);
    })
}


function showSlide(direction) {
    phones[currentSlide].classList.add('next', direction);
    phones[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('activated');
        isEnabled = true; 
    })

}

function previousSlide (n) {
   hideSlide('to-right');
   changeCurrentSlide(n-1);
   showSlide('from-left');  
}

function nextSlide (n) {
    hideSlide('to-left');
    changeCurrentSlide(n+1);   
    showSlide('from-right');  
 }

document.querySelector('.arrow_left').addEventListener('click', function() {
   if (isEnabled) {
       previousSlide(currentSlide);
   }
})

document.querySelector('.arrow_right').addEventListener('click', function() {
    if (isEnabled) {
        nextSlide(currentSlide);
    }
 })

/*-------Phones---------*/
const DISPLAY_VERTICAL=document.getElementById('rectangle1');
const PHONE_VERTICAL=document.querySelector('.vertical');
PHONE_VERTICAL.addEventListener('click', function (e) {
    if(DISPLAY_VERTICAL.style.display=='none')
    DISPLAY_VERTICAL.style.display='block'
    else DISPLAY_VERTICAL.style.display='none';
});

const DISPLAY_HORIZONT=document.getElementById('rectangle2');
const PHONE_HORIZONT=document.querySelector('.horizontal');
PHONE_HORIZONT.addEventListener('click', function (e) {
    if(DISPLAY_HORIZONT.style.display=='none')
    DISPLAY_HORIZONT.style.display=='block';
    else DISPLAY_HORIZONT.style.display=='none';
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