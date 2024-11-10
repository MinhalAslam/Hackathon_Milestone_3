// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var profilePictureInput = document.getElementById('profilePicture');
    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Picture element
    var profilePictureFile = (_a = profilePictureInput === null || profilePictureInput === void 0 ? void 0 : profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
    // Generate the resume content dynamically
    var resumeHTML = "\n        <h2><b>Editable Resume</b></h2>\n\n        <h3>Personal Information</h3>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n        <p><b>Name:</b> <span contenteditable=\"true\">").concat(name, "</span></p>\n        <p><b>Name:</b> <span contenteditable=\"true\">").concat(fathername, "</span></p>\n        <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <p><b>Address:</b> <span contenteditable=\"true\">").concat(address, "</span></p>\n\n        <h3>Qualification</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n\n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
