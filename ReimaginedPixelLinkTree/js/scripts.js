document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const intro = document.getElementById('intro');
    const introTitle = document.querySelector('.intro-title');
    const introSubtext = document.querySelector('.intro-subtext');
    const introHeight = intro.offsetHeight;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const scale = Math.max(1 - scrollY / introHeight, 0.5);
        const opacity = Math.max(1 - scrollY / introHeight, 0);

        intro.style.transform = `scale(${scale})`;
        intro.style.opacity = opacity;

        if (scrollY > introHeight) {
            header.style.transform = 'translateY(0)';
        } else {
            header.style.transform = 'translateY(-100%)';
        }
    });

    header.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    intro.addEventListener('click', () => {
        window.scrollTo({ top: introHeight, behavior: 'smooth' });
    });
});