fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("bio").textContent = data.bio;

    const projectList = document.getElementById("project-list");
    data.projects.forEach((project) => {
      const div = document.createElement("div");
      div.className = "project";
      div.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      projectList.appendChild(div);
    });

    const skillList = document.getElementById("skill-list");
    data.skills.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillList.appendChild(li);
    });
  });

const themeBtn = document.getElementById("toggle-theme");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
