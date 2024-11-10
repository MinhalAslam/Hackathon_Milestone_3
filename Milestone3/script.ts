// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fathername = (document.getElementById('fathername') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Picture element
    const profilePictureFile = profilePictureInput?.files?.[0];
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

    // Generate the resume content dynamically
    const resumeHTML = `
        <h2><b>Editable Resume</b></h2>

        <h3>Personal Information</h3>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
        <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
        <p><b>Name:</b> <span contenteditable="true">${fathername}</span></p>
        <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
        <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
        <p><b>Address:</b> <span contenteditable="true">${address}</span></p>

        <h3>Qualification</h3>
        <p contenteditable="true">${education}</p>

        <h3>Work Experience</h3>
        <p contenteditable="true">${experience}</p>

        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.');
    }
});