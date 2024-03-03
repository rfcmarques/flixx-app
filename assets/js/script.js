const state = {
    currentPage: window.location.pathname,
};

//Highlight active link
function higlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.getAttribute('href') === state.currentPage) {
            link.classList.add('active');
        }
    })
}

// Init function
function init() {
    switch (state.currentPage) {
        case '/':
        case '/index.html':
            console.log('home');
            break;
        case '/shows.html':
            console.log('shows');
            break;
        case '/movie-details.html':
            console.log('movie details');
            break;
        case '/tv-details.html':
            console.log('tv details');
            break;
        case '/search.html':
            console.log('search');
            break;
        default:
            console.log('404')
            break;
    }

    higlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);