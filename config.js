document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('nav a');
    
    for (let link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});
