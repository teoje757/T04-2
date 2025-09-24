function navigate(page) {
    const pages = {
        home: 'index.html',
        televisions: 'televisions.html',
        about: 'about.html'
    };
    window.location.href = pages[page];
}

// Highlight current page in nav
function highlightNav() {
    const path = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    if (path.endsWith('index.html')) {
        document.getElementById('nav-home').classList.add('active');
    } else if (path.endsWith('televisions.html')) {
        document.getElementById('nav-televisions').classList.add('active');
    } else if (path.endsWith('about.html')) {
        document.getElementById('nav-about').classList.add('active');
    }
}
highlightNav();
