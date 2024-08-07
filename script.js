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
let currentProjectIndex = 0;

function showProject(index) {
    const projects = document.querySelectorAll('.project2');
    projects.forEach((project2, i) => {
        project2.classList.toggle('active', i === index);
    });
}

function showNextProject() {
    const projects = document.querySelectorAll('.project2');
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    showProject(currentProjectIndex);
}

function showPreviousProject() {
    const projects = document.querySelectorAll('.project2');
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    showProject(currentProjectIndex);
}

// Initially show the first project
showProject(currentProjectIndex);

