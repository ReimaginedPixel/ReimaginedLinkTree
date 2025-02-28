document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const intro = document.getElementById('intro');
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

    // Create multiple testimonial boxes
    const testimonialsContainer = document.getElementById('testimonials');
    const testimonials = [
        { username: 'Olana', text: 'Pixel nie istnieje on jest ai', img: 'images/DiscordPFP1.jpg' },
        { username: 'Mr_Tostus', text: 'Troche Femboy ale spoko', img: 'images/DiscordPFP2.png' },
        { username: 'Noli', text: 'dziękuję ❤️ chwila zbyt gejowskie', img: 'images/DiscordPFP3.png' },
        { username: 'Deenichh', text: 'Pixel to Femboy', img: 'images/DiscordPFP4.png' },
        { username: '₥Ɇ₮₳₥₣Ɇ₮₳₥ł₦Ɇ₭', text: 'to se pinguj idfc', img: 'images/DiscordPFP5.png' },
        { username: 'q2014wick', text: 'aaaaa Dzięki 😄', img: 'images/DiscordPFP6.png' },
        { username: 'Gramnamaksa', text: 'HALO PIXEL MISIAKU', img: 'images/DiscordPFP7.png' },
        { username: 'ReimaginedMendar', text: 'KURWA!1!1 POMOCY', img: 'images/DiscordPFP8.png' },
        { username: 'REXIO', text: 'bro are you live', img: 'images/DiscordPFP9.png' },
        { username: 'rafal-gaming', text: 'PIXEL HALO ZA GRAJ', img: 'images/DiscordPFP10.png' }
    ];

    testimonials.forEach((testimonial, index) => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial';
        testimonialDiv.style.animationDelay = `${index * 2}s`; // Stagger the animations

        const img = document.createElement('img');
        img.src = testimonial.img;
        img.alt = 'Discord PFP';
        img.className = 'testimonial-pfp';

        const textDiv = document.createElement('div');
        textDiv.className = 'testimonial-text';

        const h3 = document.createElement('h3');
        h3.textContent = testimonial.username;

        const p = document.createElement('p');
        p.textContent = testimonial.text;

        textDiv.appendChild(h3);
        textDiv.appendChild(p);
        testimonialDiv.appendChild(img);
        testimonialDiv.appendChild(textDiv);
        testimonialsContainer.appendChild(testimonialDiv);
    });

    // Add hover event listeners to control animation state
    const testimonialElements = document.querySelectorAll('.testimonial');
    testimonialElements.forEach(testimonial => {
        testimonial.addEventListener('mouseenter', () => {
            testimonialElements.forEach(el => el.style.animationPlayState = 'paused');
        });
        testimonial.addEventListener('mouseleave', () => {
            testimonialElements.forEach(el => el.style.animationPlayState = 'running');
        });
    });
});