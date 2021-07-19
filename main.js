document.addEventListener('scroll', showScroll)

function showScroll() {
    const scrollup = document.getElementById('scroll-up');
    if (window.scrollY > 250) {
        scrollup.classList.remove('d-none');
    }
    else {
        scrollup.classList.add('d-none');
    }
}