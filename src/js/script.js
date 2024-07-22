// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// hamburger
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    document.querySelector('#nav-menu').classList.toggle('hidden');
    document.querySelector('#nav-menu').classList.add('animate__animated');
    document.querySelector('#nav-menu').classList.add('animate__fadeInRight');
});

function checkScreen() {
    console.log(window.innerWidth);
    if (window.innerWidth < 768) {
        document.querySelector('#nav-menu').classList.add('animate__animated');
        document.querySelector('#nav-menu').classList.add('animate__fadeInRight');
    } else {
        document.querySelector('#nav-menu').classList.remove('animate__animated');
        document.querySelector('#nav-menu').classList.remove('animate__fadeInRight');
    }
}

window.onresize = ('resize', checkScreen);

checkScreen();

const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const indicators = document.querySelectorAll('#indicator > div');

let currentIndex = 0;
const totalSlides = slider.children.length;

function goToSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
    updateIndicator();
}

function updateIndicator() {
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('bg-primary');
            indicator.classList.remove('bg-gray-400');
        } else {
            indicator.classList.add('bg-gray-400');
            indicator.classList.remove('bg-primary');
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        goToSlide(index);
    });
});