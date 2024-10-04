var resumeForm = document.getElementById('resume-form');
var displayName = document.getElementById('display-name');
var displayEmail = document.getElementById('display-email');
var displayPhone = document.getElementById('display-phone');
var displayDegree = document.getElementById('display-degree');
var displayYear = document.getElementById('display-year');
var displayPosition = document.getElementById('display-position');
var displayDuration = document.getElementById('display-duration');
var displaySkills = document.getElementById('display-skills');
var resumeDisplay = document.getElementById('resume-display');
var resumeUrlSpan = document.getElementById('resume-url');
var resumeLinkSection = document.getElementById('resume-link-section');
var copyLinkBtn = document.getElementById('copy-link');
var shareBtn = document.getElementById('share-btn');
var downloadBtn = document.getElementById('download-btn');
resumeDisplay.style.display = 'none';
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameInput = document.getElementById('name').value;
    var emailInput = document.getElementById('email').value;
    var phoneInput = document.getElementById('phone').value;
    var degreeInput = document.getElementById('degree').value;
    var yearInput = document.getElementById('year').value;
    var positionInput = document.getElementById('position').value;
    var durationInput = document.getElementById('duration').value;
    var skillsInput = document.getElementById('skills').value;
    displayName.textContent = nameInput;
    displayEmail.textContent = emailInput;
    displayPhone.textContent = phoneInput;
    displayDegree.textContent = degreeInput;
    displayYear.textContent = yearInput;
    displayPosition.textContent = positionInput;
    displayDuration.textContent = durationInput;
    var skillsArray = skillsInput.split(',').map(function (skill) { return skill.trim(); });
    displaySkills.innerHTML = '';
    skillsArray.forEach(function (skill) {
        var p = document.createElement('p');
        p.textContent = skill;
        p.classList.add('skill-item');
        displaySkills.appendChild(p);
    });
    resumeDisplay.style.display = 'block';
    resumeLinkSection.style.display = 'block';
    var currentUrl = window.location.href;
    resumeUrlSpan.textContent = currentUrl;
});
var editButton = document.getElementById('edit-btn');
var saveButton = document.getElementById('save-btn');
var personalInfoParagraphs = document.querySelectorAll('.resume .personal-info p');
var educationParagraphs = document.querySelectorAll('.resume .education p');
var workExperienceParagraphs = document.querySelectorAll('.resume .work-experience p');
var skillsParagraphs = document.querySelectorAll('.resume .skills p');
function enableEditing() {
    personalInfoParagraphs.forEach(function (p) { return p.contentEditable = "true"; });
    educationParagraphs.forEach(function (p) { return p.contentEditable = "true"; });
    workExperienceParagraphs.forEach(function (p) { return p.contentEditable = "true"; });
    skillsParagraphs.forEach(function (p) { return p.contentEditable = "true"; });
    editButton.style.display = 'none';
    saveButton.style.display = 'inline-block';
}
function saveChanges() {
    personalInfoParagraphs.forEach(function (p) { return p.contentEditable = "false"; });
    educationParagraphs.forEach(function (p) { return p.contentEditable = "false"; });
    workExperienceParagraphs.forEach(function (p) { return p.contentEditable = "false"; });
    skillsParagraphs.forEach(function (p) { return p.contentEditable = "false"; });
    editButton.style.display = 'inline-block';
    saveButton.style.display = 'none';
    document.getElementById('name').value = displayName.textContent || '';
    document.getElementById('email').value = displayEmail.textContent || '';
    document.getElementById('phone').value = displayPhone.textContent || '';
    document.getElementById('degree').value = displayDegree.textContent || '';
    document.getElementById('year').value = displayYear.textContent || '';
    document.getElementById('position').value = displayPosition.textContent || '';
    document.getElementById('duration').value = displayDuration.textContent || '';
    var updatedSkills = Array.prototype.slice.call(document.querySelectorAll('.resume .skills p'))
        .map(function (p) { return p.textContent || ''; })
        .join(', ');
    document.getElementById('skills').value = updatedSkills;
}
editButton.addEventListener('click', enableEditing);
saveButton.addEventListener('click', saveChanges);
copyLinkBtn.addEventListener('click', function () {
    var url = resumeUrlSpan.textContent;
    if (url) {
        navigator.clipboard.writeText(url)
            .then(function () { return alert('Link copied to clipboard!'); })
            .catch(function (err) { return console.error('Error copying text: ', err); });
    }
    else {
        alert('URL not found.');
    }
});
shareBtn.addEventListener('click', function () {
    var url = resumeUrlSpan.textContent;
    if (navigator.share && url) {
        navigator.share({
            title: 'My Resume',
            text: 'Check out my resume!',
            url: url,
        }).catch(function (error) { return console.error('Error sharing:', error); });
    }
    else {
        alert('Web Share API is not supported in this browser. Copy the link instead.');
    }
});
downloadBtn.addEventListener('click', function () {
    window.print();
});
