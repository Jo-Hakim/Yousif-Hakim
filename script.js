function showContent(id) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.display = section.id === id ? "block" : "none";
  });

  const links = document.querySelectorAll("nav ul li a");
  links.forEach((link) => {
    if (link.getAttribute("href") === "#" + id) {
      link.style.color = "gray";
    } else {
      link.style.color = "";
    }
  });
}

// Show the home section by default
document.addEventListener("DOMContentLoaded", () => {
  showContent("home");
});
let currentProjectIndex = 0;

function showProject(index) {
  const projects = document.querySelectorAll(".project2");
  projects.forEach((project2, i) => {
    project2.classList.toggle("active", i === index);
  });
}
function showNextProject() {
  const projects = document.querySelectorAll(".project2");
  currentProjectIndex = (currentProjectIndex + 1) % projects.length;
  showProject(currentProjectIndex);
}
function showPreviousProject() {
  const projects = document.querySelectorAll(".project2");
  currentProjectIndex =
    (currentProjectIndex - 1 + projects.length) % projects.length;
  showProject(currentProjectIndex);
}
// Initially show the first project
showProject(currentProjectIndex);

// Skill navigation functionality
let currentSkillIndex = 0;

function showSkill(index) {
  const skills = document.querySelectorAll(".project");
  skills.forEach((skill, i) => {
    skill.classList.toggle("active", i === index);
  });
}

function showNextSkill() {
  const skills = document.querySelectorAll(".project");
  currentSkillIndex = (currentSkillIndex + 1) % skills.length;
  showSkill(currentSkillIndex);
}

function showPreviousSkill() {
  const skills = document.querySelectorAll(".project");
  currentSkillIndex = (currentSkillIndex - 1 + skills.length) % skills.length;
  showSkill(currentSkillIndex);
}
showSkill(currentSkillIndex);
// Clock functionality
function showClock() {
  const clock = document.querySelector(".clock");
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let period = "AM";
  if (hours > 12 || hours == 12) {
    period = "PM";
    hours = hours - 12;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  let time = `${period}:${hours}:${minutes}:${seconds}`;
  clock.innerHTML = time;
}

setInterval(showClock, 1000);
