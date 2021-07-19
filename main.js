document.addEventListener('scroll', showScroll)

function showScroll() {
    const scrollup = document.getElementById('scroll-up');
    if (window.scrollY > 200) {
        scrollup.classList.remove('d-none');
    }
    else {
        scrollup.classList.add('d-none');
    }
}