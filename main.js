"use strict";

let skills = ["A SOFTWARE DEVELOPER", "A UI/UX DESIGNER", "A RESEARCHER", "A TECHNICAL WRITER"];

let images = ["../images/knighthacks.png", "../images/shellhacks.png", "../images/sprungeratucf.png"];

let projects = [
    {
        title: "SprintScout",
        description: "SprintScout is an AI-powered recommendation engine designed to help business owners find the best accelerator programs based on their specific needs. It uses a vector search algorithm to analyze business attributes and match them with relevant programs, while also incorporating a computer vision feature for gesture-based interaction and real-time voice transcription through OpenAI’s Whisper API. The seamless integration of these technologies creates an interactive, user-friendly platform for business growth. I contributed by developing the frontend using React.js, JavaScript, HTML, and CSS, as well as designing the UI/UX interface with Canva and Figma. The project won MLH's 'Best Use of MongoDB' category and placed third in ServiceNow's sponsorship challenge.",
        image: "../images/SprintScout.png",
        link: "https://devpost.com/software/toolx",
        skills: ["React.js", "Javascript", "HTML", "CSS", "Figma"],
    },
    {
        title: "IEEE E-Portfolio Website Template",
        description: "The E-Portfolio Website Template for IEEE members is a user-friendly tool I developed using JavaScript, HTML, and CSS as part of the Pro Development Committee at the University of Central Florida. Designed to help users create personalized online portfolios without any coding experience, this template features a customizable design, an organized structure, and clear instructions, making it accessible for users to modify and host their own portfolio websites. Users can easily edit key files, such as index.html and styles.css, directly on GitHub and utilize GitHub Pages for hosting their e-portfolios online. Additionally, the template provides guidance for uploading custom fonts and images, as well as alternative hosting options like Netlify and Vercel.",
        image: "../images/ieeeeportfolio.png",
        link: "https://github.com/morallyearlgrey/IEEE-E-Portfolio",
        skills: ["Javascript", "HTML", "CSS", "Figma"]
    },
    {
        title: "FinAtlas",
        description: "FinAtlas is an AI-powered website designed to help users find financial resources, tailored specifically to their unique needs. Users can ask the AI assistant for advice on programs available for low-income households or financial aid for students, and the assistant provides clear, easy-to-understand suggestions along with a map view of nearby resources. Built with Groq’s Llama3 AI model and Google Maps API, the platform ensures reliable responses by validating user queries. I contributed by designing the Figma layout, developing a HTML/CSS documentation page, and assisting in presenting the project.",
        image: "../images/FinAtlas.png",
        link: "https://devpost.com/software/finatlas?ref_content=my-projects-tab&ref_feature=my_projects",
        skills: ["HTML", "CSS", "Figma"]
    },
    {
        title: "Default Homescreen",
        description: "I created an interactive default home screen using HTML, CSS, and JavaScript, featuring organized bookmarks for easy access to essential pages, which significantly enhances overall user navigation. A key feature is the innovative lightbulb icon, allowing users to toggle effortlessly between dark mode and light mode, promoting a personalized browsing experience. The design prioritizes user privacy by strictly adhering to best practices, omitting any personal data references in the HTML code to safeguard sensitive information. I personally use this home screen for my online activities, ensuring quick access to important resources while maintaining a tailored browsing experience.",
        image: "../images/defaulthomescreen.png",
        link: "https://morallyearlgrey.github.io/default-homescreen/",
        skills: ["Javascript", "HTML", "CSS", "Figma"]
    },
    {
        title: "RNA-to-Protein Translator",
        description: "The RNA Sequence to Protein Sequence Translator is a command-line tool I developed in C++ that translates RNA sequences into their corresponding protein sequences. Designed for high school and university students, researchers, bioinformaticians, and healthcare workers, this user-friendly program supports multiple sequences simultaneously and displays the output in a neat and readable format. It accurately converts RNA sequences while providing feedback on incorrect inputs with a '???' value, ensuring clarity for users. With simple instructions for entering RNA sequences, this tool facilitates the conversion process, making it accessible for a wide range of users.",
        image: "../images/rnatoprotein.jpeg",
        link: "https://github.com/morallyearlgrey/RNA-to-Protein-Translator",
        skills: ["C++"]
    },
    {
        title: "Human Population Simulator",
        description: "The human population simulator I developed using Matplotlib produces graphs that illustrate how long a hypothetical human society could survive based on several key factors, including starting population, infant mortality, disaster chance, fertility, and food production/security. This tool offers descriptive statistics and accurately models the effects of these variables, providing users with a customizable experience. Users can modify variables to tailor the simulation to their needs, and the resulting graphs are exportable for further analysis. To customize the simulation, users must download and edit the code, with specific recommendations to only modify variables in the designated # VARIABLES section.",
        image: "../images/humansimulation.png",
        link: "https://github.com/morallyearlgrey/Population-Simulation",
        skills: ["Python", "Matplotlib", "JupyterNotebook", "Colab"]
    }
];

let experiences = [
    {
        title: "PRO-DEVELOPMENT COMMITTEE MEMBER",
        organization: "⚡ IEEE at the University of Central Florida",
        timeline: "Aug. 2024 - Present",
        description: "• Co-led a workshop on Linkedins, instructing attendees how to create a professional and marketable Linkedin account.<br>• Created an engaging PowerPoint presentation on career fair and career readiness, enhancing IEEE members' soft skills.<br>• Developed a user-friendly ePortfolio template out of Javascript and HTML/CSS for IEEE committee members to utilize.",
        skills: ["Leadership", "Education", "PowerPoint", "Javascript", "GitHub", "HTML", "CSS", "Figma"],
    },
    {
        title: "DESIGN TEAM MEMBER",
        organization: "🐉 Knighthacks at the University of Central Florida",
        timeline: "Sep. 2024 - Present",
        description: "• Designed and produced professional signage for the 2024 KnightHacks hackathon, facilitating attendee navigation and enhancing event branding.",
        skills: ["Canva", "Figma"],
    },
    {
        title: "PRESIDENT",
        organization: "💻 Girls Who Code Club (Pine View School)",
        timeline: "Aug. 2023 - May 2024",
        description: "• Designed and implemented a comprehensive year-long curriculum that included Python, HTML, and CSS lessons.<br>• Ran weekly spotlight features on influential women in STEM to inspire participants.<br>• Increased members' soft and technical skills through weekly lessons and projects.",
        skills: ["Leadership", "Education", "Python", "HTML", "CSS"],
    },
    {
        title: "VICE CAPTAIN",
        organization: "🤖 FIRST Robotics Competition Team 3627 – Jungle Robotics",
        timeline: "Aug. 2023 - May 2024",
        description: "• Directed and founded a VEX-IQ summer camp for elementary students, designing a comprehensive curriculum on robot construction and programming, and successfully raising over $12,000.<br>• Cultivated sponsorship relationships that led to securing over $8,000 in funding<br>• Oversaw budget management and guided 60+ team members in achieving financial targets through effective resource allocation and training.<br>• Coordinated and led 11 robotics events to inspire youth to pursue STEM, engaging over 3,500 participants.<br>• Efforts directly led to regional recognition, securing the South Florida 2024 Engineering Inspiration Award that allowed the team to compete the annual FRC World Competition.",
        skills: ["Leadership", "Education", "Management", "Fundraising", "Event-Planning", "FIRST Robotics Competition", "VEX-IQ", "Technical Writing", "Notion"],

    },
    {
        title: "GREEN TEA CATECHINS AND ANTIBIOTICS RESEARCHER",
        organization: "🍵 AP Capstone Program (Pine View)",
        timeline: "Aug. 2023 - May 2024",
        description: "• Conducted a comparative study on the antimicrobial activity of U.S. green tea brands (Numi, Bigelow, and Twinings) in combination with Ampicillin against Escherichia coli<br>• Revealed antimicrobial effectiveness and emphasizing the need for further research into antibiotic-phytochemical combination therapy.<br>• Applied the Kirby-Bauer Disk Diffusion Test to measure inhibition zones, quantifying the synergistic effects of green tea catechins and antibiotics, and analyzed data using a T-Test for statistical significance.<br>• Wrote, edited, and successfully submitted to Collegeboard a 5,000+ word research paper.<br>• For AP exams and projects associated with the AP Capstone program, received a 5 in AP Research and a 4 in AP Seminar.",
        skills: ["Agar Plates", "BACE Certification", "Culturing Bacteria", "Lab Safety", "Micropipettes", "Technical Writing", "Editing", "Research"],

    },
    {
        title: "EDITOR-IN-CHIEF/FOUNDER",
        organization: "🏳️‍🌈 Iridescence LGBTQ+ Literary Magazine",
        timeline: "Aug. 2022 - May 2024",
        description: "• Founded and managed a youth-run LGBTQ+ literary magazine, overseeing a team of 9 to publish a 30-page issue featuring over 25 submissions from queer youth, launched free of charge.<br>• Led weekly training sessions on design tools (InDesign, Marq, Canva, Lightroom), coordinated the submissions process, and ensured timely completion of tasks while managing deadlines.<br>• Designed and laid out 10 pages, authored 1 poem, captured 4 photographs, managed social media campaigns, and designed the magazine's website (www.iridescenceliterarymagazine.com).",
        skills: ["Leadership", "Education", "Adobe InDesign", "Adobe Lightroom", "Marq", "Canva", "Writing", "Social Media", "Professional Photography", "Figma", "Copy-Editing"],

    },
    {
        title: "EDITOR-IN-CHIEF",
        organization: "📰 The Match School Newspaper (Pine View)",
        timeline: "Aug. 2022 - May 2024",
        description: "• Led a team of 22 staff members to produce and distribute four 26-page issues of a school newspaper, informing students and parents about current events.<br>• Published 17 stories, including four editorial columns, while managing layout and editing of over 70 pages across three years on the publication team.<br>• Spearheaded editorial and approval processes, resulting in the newspaper earning a Silver rating in the annual Florida Scholastic Press Association (FSPA) Newspaper Evaluation.",
        skills: ["Leadership", "Education", "Adobe InDesign", "Adobe Lightroom", "Copy-Editing", "Canva", "Journalistic Writing", "Interviewing", "Professional Photography"],

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
            <h2 class="experience_organization">${experience.organization}</h2>
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