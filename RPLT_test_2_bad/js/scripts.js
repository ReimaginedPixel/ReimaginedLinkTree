document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const intro = document.getElementById('intro');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up
            header.style.transform = 'translateY(0)';
        }

        if (scrollTop > intro.offsetHeight) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }

        lastScrollTop = scrollTop;
    });

    header.addEventListener('mouseover', function() {
        header.style.transform = 'scale(1.1)';
    });

    header.addEventListener('mouseout', function() {
        header.style.transform = 'scale(1)';
    });

    header.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});