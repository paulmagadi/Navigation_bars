const searchBar = document.querySelector('.search-mobile-container');

const searchButton = document.querySelector('.search-button-mobile');

const closeSearch = document.querySelector('.close-search');

const navMenu = document.querySelector('.navlinks');

const menuButton = document.querySelector('.nav-menu');

const closeMenu = document.querySelector('.close-menu');


searchButton.addEventListener('click', function(){
    searchBar.style.display = 'flex';
})

closeSearch.addEventListener('click', function(){
    searchBar.style.display = 'none';
})

menuButton.addEventListener('click', function(){
    navMenu.style.display = 'block';
})

closeMenu.addEventListener('click', function(){
    navMenu.style.display = 'none';
})