const skillsSection = document.querySelector(".skills") as HTMLElement;
const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;

toggleButton.addEventListener("click", () => {
  skillsSection.classList.toggle("hidden");
});