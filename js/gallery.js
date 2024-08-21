// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Hide and show footer on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let footer = document.getElementById('footer');
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        footer.classList.add('hidden-footer');
    } else if (scrollTop < 100) {
        footer.classList.remove('hidden-footer');
    } else {
        footer.classList.remove('hidden-footer');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}, false);
