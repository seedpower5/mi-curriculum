// Object with the CV information
const cv = {
  name: "Jorge Balmori Arenas",
  profession: "Junior Web Developer",
  contact: {
    email: "jbalmoriarenas@gmail.com",
    phone: "+34 683 175 251",
    linkedin: "www.linkedin.com/in/jorge-balmori-arenas",
    github: "https://github.com/seedpower5",
  },
  experience: [
    {
      company: "Neuprotel",
      position: "Frontend Developer Intern",
      period: "March 2023 - June 2023",
      description: "During my internship at Neuprotel, I specialized in the development of custom enterprise software, using technologies like HTML, CSS, React, and APIs to create tailored solutions that optimize business management and administration.",
    },
    {
      company: "CIC Consulting Informático",
      position: "Programming Bootcamp",
      period: "July 2023 - October 2023",
      description: "I participated in a 3-month bootcamp on enterprise application development in Java, where I obtained certification and gained experience in teamwork, code organization, and using technologies like GitLab, GitHub, Java, Angular, Jenkins, and Spring.",
    },
    {
      company: "CabralesAventura.Sl",
      position: "Web Developer",
      period: "January 2023 - August 2024",
      description: "I developed the website for the tourism activities company Cabralesaventura and worked on various design projects.",
    },
  ],
  education: [
    {
      institution: "Ies Augusto Linares",
      studies: "Higher Technician in Web Application Development",
      year: "2021 - 2023",
    },
    {
      institution: "Colegio Calasanz Santander",
      studies: "Scientific Baccalaureate",
      year: "2017",
    },
  ],
  skills: ["JavaScript", "React", "Node.js", "CSS", "HTML", "Spring", "Java", "Angular", "PHP", "Jenkins", "MySQL", "GitHub"],
};

// Function to generate the CV in HTML
function generateCV() {
  const cvDiv = document.getElementById("cv");

  // Format as JS code with brackets and semicolons
  const nameProfession = `
      <div class="bloque">
        <span class="corchete">{</span><br>
        &nbsp;&nbsp;<span class="propiedad">name</span>: <span class="string">"${cv.name}"</span>,<br>
        &nbsp;&nbsp;<span class="propiedad">profession</span>: <span class="string">"${cv.profession}"</span>;<br>
        <span class="corchete-cierre">}</span>
      </div>`;
  cvDiv.innerHTML = nameProfession;

  // Contact
  const contact = `
      <div class="bloque">
        <span class="corchete">{</span><br>
        &nbsp;&nbsp;<span class="propiedad">contact</span>: <span class="corchete">{</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">email</span>: <span class="string">"${cv.contact.email}"</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">phone</span>: <span class="string">"${cv.contact.phone}"</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">linkedin</span>: <a href="${cv.contact.linkedin}" target="_blank" class="string">"${cv.contact.linkedin}"</a>;<br>
        &nbsp;&nbsp;<span class="corchete-cierre">}</span><br>
        <span class="corchete-cierre">}</span>
      </div>`;
  cvDiv.innerHTML += contact;

  // Experience
  let experience = `
      <div class="bloque">
        <span class="corchete">{</span><br>
        &nbsp;&nbsp;<span class="propiedad">experience</span>: <span class="corchete">[</span><br>`;
  cv.experience.forEach((exp) => {
    experience += `
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="corchete">{</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">company</span>: <span class="string">"${exp.company}"</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">position</span>: <span class="string">"${exp.position}"</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">period</span>: <span class="string">"${exp.period}"</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">description</span>: <span class="string">"${exp.description}"</span>;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="corchete-cierre">},</span><br>`;
  });
  experience += `
        &nbsp;&nbsp;<span class="corchete-cierre">]</span><br>
        <span class="corchete-cierre">}</span>
      </div>`;
  cvDiv.innerHTML += experience;

  // Education
  let education = `
      <div class="bloque">
        <span class="corchete">{</span><br>
        &nbsp;&nbsp;<span class="propiedad">education</span>: <span class="corchete">[</span><br>`;
  cv.education.forEach((edu) => {
    education += `
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="corchete">{</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">institution</span>: <span class="string">"${edu.institution}"</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">degree</span>: <span class="string">"${edu.studies}"</span>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="propiedad">year</span>: <span class="string">"${edu.year}"</span>;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="corchete-cierre">},</span><br>`;
  });
  education += `
        &nbsp;&nbsp;<span class="corchete-cierre">]</span><br>
        <span class="corchete-cierre">}</span>
      </div>`;
  cvDiv.innerHTML += education;

  // Skills
  const skills = `
      <div class="bloque">
        <span class="corchete">{</span><br>
        &nbsp;&nbsp;<span class="propiedad">skills</span>: <span class="corchete">[</span><br>
        ${cv.skills
          .map(
            (skill) =>
              `&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"${skill}"</span>,<br>`
          )
          .join("")}
        &nbsp;&nbsp;<span class="corchete-cierre">]</span><br>
        <span class="corchete-cierre">}</span>
      </div>`;
  cvDiv.innerHTML += skills;
}

// Call the function to generate the CV when the page loads
window.onload = generateCV;
