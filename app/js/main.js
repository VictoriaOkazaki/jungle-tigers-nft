if ($(window).width() < 500) {
    var sticker = document.querySelector('.home__stickers');
    var firstAnimal = document.querySelector('.home__animals-img-1');
    var lastAnimal = document.querySelector('.home__animals-img-3');
    var currentStage = document.querySelector('.roadmap__content-label');
    sticker.remove();
    firstAnimal.remove();
    lastAnimal.remove();
    currentStage.remove();
 }

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

accordeon();

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

scroll();