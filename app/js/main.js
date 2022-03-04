const mobileAdaptive = () => {
    if ($(window).width() < 500) {
        var sticker = document.querySelector('.home__stickers');
        var firstAnimal = document.querySelector('.home__animals-img-1');
        var lastAnimal = document.querySelector('.home__animals-img-3');
        var currentStage = document.querySelector('.roadmap__content-label');
        var mintBtn = document.querySelector('.project__description-btn');
        
        if (sticker) sticker.remove();
        if (firstAnimal) firstAnimal.remove();
        if (lastAnimal) lastAnimal.remove();
        if (currentStage) currentStage.remove();
        if (mintBtn) mintBtn.remove();
        
    }
    if ($(window).width() < 550) {
        var connectBtn = document.querySelector('.header__btn-img');
        if (connectBtn) connectBtn.remove();
    }
}

const burgerSwitch = () => {
    const burger = document.querySelector('.burger');
    const headerMenu = document.querySelector('.header__menu');
    const containerBroad = document.querySelector('.container-broad');

    if ($(window).width() < 1100) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('burger--active');
            headerMenu.classList.toggle('header__menu--active');
            containerBroad.classList.toggle('container-broad--active');
        })
    }
};

const backToTop = () => {
    const backToTop = document.querySelector('.footer__to-top-link');
    const homeSection = document.getElementById('home');

    backToTop.addEventListener('click', (event) => {
        event.preventDefault();

        homeSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

const accordeon = () => {
    const chItems = document.querySelectorAll('.faq__item');

    chItems.forEach(item => {
        const chButton = item.querySelector('.faq__title');
        const chContent = item.querySelector('.faq__description');

        chButton.addEventListener('click', () => {
            // Сворачивание ранее открытых секций
            chItems.forEach(openItem => {
                if (openItem === item) return;
                const chButtonActive = openItem.querySelector('.faq__title');
                const chContentOpen = openItem.querySelector('.faq__description');
                if (chContentOpen.classList.contains('open')) {
                    chContentOpen.style.height = '';
                    chButtonActive.classList.remove('active');
                    chContentOpen.classList.remove('open');
                }
            });

            if (chContent.classList.contains('open')) {
                chContent.style.height = '';
            } else {
                chContent.style.height = chContent.scrollHeight + 'px';
            }

            chButton.classList.toggle('active');
            chContent.classList.toggle('open');
        });
    });
};

const scroll = () => {
    const headerLinks = document.querySelectorAll('.header__menu-item a');

    headerLinks.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();

            const id = element.getAttribute('href').substring(1);
            const section = document.getElementById(id);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }
        });
    });
};

document.addEventListener("DOMContentLoaded", function(event) {
    try {
        mobileAdaptive();
        burgerSwitch();
        backToTop();
        accordeon();
        scroll();
    } catch (err) {
        console.error(err);
    }
});
