function showContent(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = section.id === id ? 'block' : 'none';
    });

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        if (link.getAttribute('href') === '#' + id) {
            link.style.color = 'gray';
        } else {
            link.style.color = '';
        }
    });
}

// Show the hero section by default
document.addEventListener('DOMContentLoaded', () => {
    showContent('hero');
});