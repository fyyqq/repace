
const toggler = document.querySelector('.navbar-toggler');

toggler.addEventListener('click', e => {
    e.preventDefault();

    if (!toggler.className.includes('collapsed')) {
        toggler.style.transform = 'rotate(90deg)';
        toggler.style.transition = 'transform .3s ease';
    } else {
        toggler.style.transform = 'rotate(0deg)';
    }
});