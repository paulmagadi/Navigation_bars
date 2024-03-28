document.addEventListener('DOMContentLoaded', function() {
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    const navContainer = document.querySelector('.nav-container');

    scrollLeftBtn.addEventListener('click', function() {
        navContainer.scrollLeft -= 100;
    });

    scrollRightBtn.addEventListener('click', function() {
        navContainer.scrollLeft += 100;
    });
});
