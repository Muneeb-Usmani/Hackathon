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

const resumeUrlSpan = document.getElementById('resume-url') as HTMLElement;
const resumeLinkSection = document.getElementById('resume-link-section') as HTMLElement;

const copyLinkBtn = document.getElementById('copy-link') as HTMLButtonElement;
const shareBtn = document.getElementById('share-btn') as HTMLButtonElement;
const downloadBtn = document.getElementById('download-btn') as HTMLButtonElement;

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
    const p = document.createElement('p');
    p.textContent = skill;
    p.classList.add('skill-item');
    displaySkills.appendChild(p);
  });

  resumeDisplay.style.display = 'block';
  resumeLinkSection.style.display = 'block';

  const currentUrl = window.location.href;
resumeUrlSpan.textContent = currentUrl;
});

const editButton = document.getElementById('edit-btn') as HTMLButtonElement;
const saveButton = document.getElementById('save-btn') as HTMLButtonElement;

const personalInfoParagraphs = document.querySelectorAll('.resume .personal-info p') as NodeListOf<HTMLElement>;
const educationParagraphs = document.querySelectorAll('.resume .education p') as NodeListOf<HTMLElement>;
const workExperienceParagraphs = document.querySelectorAll('.resume .work-experience p') as NodeListOf<HTMLElement>;
const skillsParagraphs = document.querySelectorAll('.resume .skills p') as NodeListOf<HTMLElement>;

function enableEditing() {
  personalInfoParagraphs.forEach(p => p.contentEditable = "true");
  educationParagraphs.forEach(p => p.contentEditable = "true");
  workExperienceParagraphs.forEach(p => p.contentEditable = "true");
  skillsParagraphs.forEach(p => p.contentEditable = "true");

  editButton.style.display = 'none';
  saveButton.style.display = 'inline-block';
}

function saveChanges() {
  personalInfoParagraphs.forEach(p => p.contentEditable = "false");
  educationParagraphs.forEach(p => p.contentEditable = "false");
  workExperienceParagraphs.forEach(p => p.contentEditable = "false");
  skillsParagraphs.forEach(p => p.contentEditable = "false");

  editButton.style.display = 'inline-block';
  saveButton.style.display = 'none';

  (document.getElementById('name') as HTMLInputElement).value = displayName.textContent || '';
  (document.getElementById('email') as HTMLInputElement).value = displayEmail.textContent || '';
  (document.getElementById('phone') as HTMLInputElement).value = displayPhone.textContent || '';
  (document.getElementById('degree') as HTMLInputElement).value = displayDegree.textContent || '';
  (document.getElementById('year') as HTMLInputElement).value = displayYear.textContent || '';
  (document.getElementById('position') as HTMLInputElement).value = displayPosition.textContent || '';
  (document.getElementById('duration') as HTMLInputElement).value = displayDuration.textContent || '';

  const updatedSkills = Array.prototype.slice.call(document.querySelectorAll('.resume .skills p'))
    .map((p: HTMLElement) => p.textContent || '')
    .join(', ');
  (document.getElementById('skills') as HTMLInputElement).value = updatedSkills;
}

editButton.addEventListener('click', enableEditing);
saveButton.addEventListener('click', saveChanges);

copyLinkBtn.addEventListener('click', () => {
  const url = resumeUrlSpan.textContent;
  if (url) {
    navigator.clipboard.writeText(url)
      .then(() => alert('Link copied to clipboard!'))
      .catch(err => console.error('Error copying text: ', err));
  } else {
    alert('URL not found.');
  }
});

shareBtn.addEventListener('click', () => {
  const url = resumeUrlSpan.textContent;
  if (navigator.share && url) {
    navigator.share({
      title: 'My Resume',
      text: 'Check out my resume!',
      url: url,
    }).catch((error) => console.error('Error sharing:', error));
  } else {
    alert('Web Share API is not supported in this browser. Copy the link instead.');
  }
});

downloadBtn.addEventListener('click', () => {
  window.print(); 
});
