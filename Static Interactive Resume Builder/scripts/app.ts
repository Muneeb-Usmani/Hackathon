const resumeForm = document.getElementById('resume-form') as HTMLFormElement;

const displayName = document.getElementById('display-name') as HTMLElement;
const displayEmail = document.getElementById('display-email') as HTMLElement;
const displayPhone = document.getElementById('display-phone') as HTMLElement;

const displayDegree = document.getElementById('display-degree') as HTMLElement;
const displayYear = document.getElementById('display-year') as HTMLElement;

const displayPosition = document.getElementById('display-position') as HTMLElement;
const displayDuration = document.getElementById('display-duration') as HTMLElement;

const displaySkills = document.getElementById('display-skills') as HTMLElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLElement;


resumeDisplay.style.display = 'none';


resumeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = (document.getElementById('name') as HTMLInputElement).value;
  const emailInput = (document.getElementById('email') as HTMLInputElement).value;
  const phoneInput = (document.getElementById('phone') as HTMLInputElement).value;

  const degreeInput = (document.getElementById('degree') as HTMLInputElement).value;
  const yearInput = (document.getElementById('year') as HTMLInputElement).value;

  const positionInput = (document.getElementById('position') as HTMLInputElement).value;
  const durationInput = (document.getElementById('duration') as HTMLInputElement).value;

  const skillsInput = (document.getElementById('skills') as HTMLInputElement).value;


  displayName.textContent = nameInput;
  displayEmail.textContent = emailInput;
  displayPhone.textContent = phoneInput;

  displayDegree.textContent = degreeInput;
  displayYear.textContent = yearInput;

  displayPosition.textContent = positionInput;
  displayDuration.textContent = durationInput;


  const skillsArray = skillsInput.split(',').map(skill => skill.trim());
  displaySkills.innerHTML = ''; 
  skillsArray.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    displaySkills.appendChild(li);
  });

  resumeDisplay.style.display = 'block';
});

