document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    console.log(scrollPosition);
    
    const menu = document.querySelector('.top-navbar');

    if (scrollPosition > 50) {
        menu.classList.remove('bg-transparent');
        menu.classList.add('bg-top-navbar');
    } else {
        menu.classList.remove('bg-top-navbar');
        menu.classList.add('bg-transparent');
    }
});
