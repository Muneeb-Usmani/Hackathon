var skillsSection = document.querySelector(".skills");
var toggleButton = document.getElementById("toggle-skills");
toggleButton.addEventListener("click", function () {
    skillsSection.classList.toggle("hidden");
});
