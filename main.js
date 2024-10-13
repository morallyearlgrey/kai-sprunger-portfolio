"use strict";

let skills = ["A SOFTWARE DEVELOPER", "A UI/UX DESIGNER", "A RESEARCHER", "A TECHNICAL WRITER"];

let images = ["../images/knighthacks.png", "../images/shellhacks.png", "../images/sprungeratucf.png"];

let projects = [
    {
        title: "SprintScout",
        description: "A brief description of Project 1.",
        image: "../images/SprintScout.png",
        link: "https://devpost.com/software/toolx",
        skills: ["React.js", "Javascript", "HTML", "CSS", "Figma"],
    },
    {
        title: "IEEE E-Portfolio Website Template",
        description: "A brief description of Project 2.",
        image: "../images/ieeeeportfolio.png",
        link: "https://github.com/morallyearlgrey/IEEE-E-Portfolio",
        skills: ["Javascript", "HTML", "CSS", "Figma"]
    },
    {
        title: "FinAtlas",
        description: "A brief description of Project 3.",
        image: "../images/FinAtlas.png",
        link: "https://devpost.com/software/finatlas?ref_content=my-projects-tab&ref_feature=my_projects",
        skills: ["HTML", "CSS", "Figma"]
    },
    {
        title: "Default Homescreen",
        description: "A brief description of Project 4.",
        image: "../images/defaulthomescreen.png",
        link: "https://morallyearlgrey.github.io/default-homescreen/",
        skills: ["Javascript", "HTML", "CSS", "Figma"]
    },
    {
        title: "RNA-to-Protein Translator",
        description: "A brief description of Project 5.",
        image: "../images/rnatoprotein.jpeg",
        link: "https://github.com/morallyearlgrey/RNA-to-Protein-Translator",
        skills: ["C++"]
    },
    {
        title: "Human Population Simulator",
        description: "A brief description of Project 6.",
        image: "../images/humansimulation.png",
        link: "https://github.com/morallyearlgrey/Population-Simulation",
        skills: ["Python", "Matplotlib", "JupyterNotebook", "Colab"]
    }
];

let experiences = [
    {
        title: "Experience 1",
        timeline: "Date X - Date Y",
        description: "A huge description of Experience 1.",
        skills: ["Skill1", "Skill2", "Skill3"],
    },
    {
        title: "Experience 2",
        timeline: "Date X - Date Y",
        description: "A huge description of Experience 2.",
        skills: ["Skill1", "Skill2", "Skill3"],

    },
    {
        title: "Experience 3",
        timeline: "Date X - Date Y",
        description: "A huge description of Experience 3.",
        skills: ["Skill1", "Skill2", "Skill3"],

    }

];


function createProjectElement(project) {
    const projectElement = document.createElement("div");
    projectElement.className = "project";

    projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project_image">
        <div class="project_info">
            <h2 class="project_title">${project.title}</h2>
            <a href="${project.link}" class="project_description">Link to project</a>
            <p class="project_description">${project.description}</p>
            <div class="project_skills">
                ${project.skills.map(skill => `<span class="skill">${skill}</span>`).join("")}
            </div>
        </div>
    `;

    return projectElement;
}

function renderProjects() {
    const projectsGrid = document.getElementById("projectsGrid");
    if (!projectsGrid) {
        console.error("Projects grid container not found");
        return;
    }

    projects.forEach(project => {
        const projectElement = createProjectElement(project);
        projectsGrid.appendChild(projectElement);
    });
}


function createExperienceElement(experience) {
    const experienceElement = document.createElement("div");
    experienceElement.className = "experience";

    experienceElement.innerHTML = `
        <div class="experience_info">
            <h3 class="experience_title">${experience.title}</h3>
            <h2 class="experience_timeline">${experience.timeline}</h2>
            <p class="experience_description">${experience.description}</p>
            <div class="experience_skills">
                ${experience.skills.map(skill => `<span class="skill">${skill}</span>`).join("")}
            </div>
        </div>
    `;

    return experienceElement;
}

function renderExperiences() {
    const experiencesGrid = document.getElementById("experiencesGrid");
    if (!experiencesGrid) {
        console.error("Experiences grid container not found");
        return;
    }

    experiences.forEach(experience => {
        const experienceElement = createExperienceElement(experience);
        experiencesGrid.appendChild(experienceElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {

        let skillsIndex = 0;

        const hero_skills = document.querySelector("#hero_skills");

        function WriteHeroSkills() {
            let skill = skills[skillsIndex];
            hero_skills.textContent = "I AM " + skill;
            skillsIndex = (skillsIndex + 1) % skills.length;

        };

        if(hero_skills) {
            WriteHeroSkills();
            setInterval(WriteHeroSkills, 3000);
        }

        let imageIndex = 0;
        const carousel = document.querySelector("#about_image_carousel");
        const right_arrow = document.querySelector("#about_right_button");
        const left_arrow = document.querySelector("#about_left_button");

        function updateArrowVisibility() {
            left_arrow.style.opacity = imageIndex == 0 ? 0.3 : 1;
            left_arrow.style.cursor = imageIndex == 0 ? "default" : "pointer";
            
            right_arrow.style.opacity = imageIndex == images.length-1 ? 0.3 : 1;
            right_arrow.style.cursor = imageIndex == images.length-1 ? "default" : "pointer";

        }

        function DisplayImage(index) {
            if (index >= 0 && index < images.length) {
                imageIndex = index; 
                carousel.src = images[imageIndex]; 
                updateArrowVisibility();

            }
        }
        
        left_arrow.addEventListener("click", () => {
            DisplayImage(imageIndex-1);
        
        });
        
        right_arrow.addEventListener("click", () => {
            DisplayImage(imageIndex+1);
        
        });

        DisplayImage(imageIndex);
        updateArrowVisibility();

        const learnMoreBtn = document.querySelector("#hero_learn_more_button");
        const aboutSection = document.querySelector("#about");

        learnMoreBtn.addEventListener("click", () => { 
            aboutSection.scrollIntoView({ behavior: "smooth" });
        });

        renderProjects();
        renderExperiences();

});