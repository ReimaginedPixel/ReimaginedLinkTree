document.addEventListener('DOMContentLoaded', () => {
    // Animate header
    gsap.from("#header", { duration: 1, y: -100, opacity: 0, ease: "bounce" });

    // Animate intro section
    gsap.from("#intro h2", { duration: 1, x: -200, opacity: 0, delay: 0.5 });
    gsap.from("#intro p", { duration: 1, x: 200, opacity: 0, delay: 1 });

    // Animate boxes
    gsap.from(".box", {
        duration: 1,
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        ease: "elastic",
        delay: 1.5
    });
});
