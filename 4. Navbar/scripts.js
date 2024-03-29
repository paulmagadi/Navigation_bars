// document.addEventListener('DOMContentLoaded', function() {
//     const scrollLeftBtn = document.querySelector('.scroll-left');
//     const scrollRightBtn = document.querySelector('.scroll-right');
//     const navContainer = document.querySelector('.nav-container');

//     scrollLeftBtn.addEventListener('click', function() {
//         navContainer.scrollLeft -= 100;
//     });

//     scrollRightBtn.addEventListener('click', function() {
//         navContainer.scrollLeft += 100;
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector(".nav-container");
    const scrollLeftBtn = document.querySelector(".left");
    const scrollRightBtn = document.querySelector(".right");

    scrollLeftBtn.addEventListener("click", function() {
        scrollContainer.scrollBy({ left: -100, behavior: "smooth" });
    });

    scrollRightBtn.addEventListener("click", function() {
        scrollContainer.scrollBy({ left: 100, behavior: "smooth" });
    });
});

