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

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('active');
});

document.addEventListener('click', function (e) {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
        navMenu.classList.remove('active');
    }
});

function checkScreenSize() {
    const width = window.innerWidth;
    
    if (width >= 768) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
        navMenu.classList.remove('active');
        document.querySelector('#nav-menu').classList.add('hidden');
    }
}

// Panggil fungsi saat halaman pertama kali dimuat
checkScreenSize();

// Dengarkan event resize pada jendela
window.addEventListener('resize', checkScreenSize);

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const elements = document.querySelectorAll('.fadeInUp-element');
            elements.forEach((element, index) => {
                element.style.animationDelay = `${index * 0.15}s`;
                element.classList.add('animate-fade-in-up');
            });
            observer1.unobserve(entry.target);
        }
    });
});

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const elements = document.querySelectorAll('.fadeInZoom-element');
            elements.forEach((element, index) => {
                element.style.animationDelay = `${index * 0.25}s`;
                element.classList.add('animate-fade-in-zoom');
            });
            observer2.unobserve(entry.target);
        }
    });
});

observer1.observe(document.querySelector('.fadeInUp-element'));
observer2.observe(document.querySelector('.fadeInZoom-element'));

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

