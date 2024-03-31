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


// document.addEventListener("DOMContentLoaded", function() {
//     const scrollContainer = document.querySelector(".nav-container");
//     const scrollLeftBtn = document.querySelector(".left");
//     const scrollRightBtn = document.querySelector(".right");

//     scrollLeftBtn.addEventListener("click", function() {
//         scrollContainer.scrollBy({ left: -100, behavior: "smooth" });
//     });

//     scrollRightBtn.addEventListener("click", function() {
//         scrollContainer.scrollBy({ left: 100, behavior: "smooth" });
//     });
// });




// document.addEventListener("DOMContentLoaded", function() {
//     const scrollContainer = document.querySelector(".nav-container");
//     const scrollLeftBtn = document.querySelector(".left");
//     const scrollRightBtn = document.querySelector(".right");

//     scrollLeftBtn.addEventListener("click", function() {
//         scrollContainer.scroll({
//             left: scrollContainer.scrollLeft - 100,
//             behavior: "smooth"
//         });
//     });

//     scrollRightBtn.addEventListener("click", function() {
//         scrollContainer.scroll({
//             left: scrollContainer.scrollLeft + 100,
//             behavior: "smooth"
//         });
//     });
// });



document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector(".nav-container");
    const scrollLeftBtn = document.querySelector(".left");
    const scrollRightBtn = document.querySelector(".right");

    scrollLeftBtn.style.display = "none"; // Initially hide the left arrow

    scrollContainer.addEventListener("scroll", function() {
        // If the scroll is at the beginning, hide the left arrow
        if (scrollContainer.scrollLeft === 0) {
            scrollLeftBtn.style.display = "none";
        } else {
            scrollLeftBtn.style.display = "block";
        }

        // If the scroll is at the end, hide the right arrow
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth === scrollContainer.scrollWidth) {
            scrollRightBtn.style.display = "none";
        } else {
            scrollRightBtn.style.display = "block";
        }
    });

    scrollLeftBtn.addEventListener("click", function() {
        scrollContainer.scroll({
            left: scrollContainer.scrollLeft - 100,
            behavior: "smooth"
        });
    });

    scrollRightBtn.addEventListener("click", function() {
        scrollContainer.scroll({
            left: scrollContainer.scrollLeft + 100,
            behavior: "smooth"
        });
    });
});



