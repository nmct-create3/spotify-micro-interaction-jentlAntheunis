let htmlToggle;

const init = () => {
    htmlToggle = document.querySelector('.js-toggle');
    htmlToggle.addEventListener('click', () => {
        htmlToggle.classList.toggle('added');
    });
};

document.addEventListener('DOMContentLoaded', init);