const searchBar = document.querySelector('.search-mobile-container');

const searchButton = document.querySelector('.search-button-mobile');

const closeSearch = document.querySelector('.close-search');


searchButton.addEventListener('click', function(){
    searchBar.style.display = 'flex';
})

closeSearch.addEventListener('click', function(){
    searchBar.style.display = 'none';
})