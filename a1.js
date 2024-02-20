const resumeButton = document.querySelector(".resume_button");

resumeButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.open("Resume_Ananya.pdf", "_blank");
});

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener('change', () => {
    document.body.classList.toggle("dark");
    
    const nav = document.querySelector("nav");
    nav.classList.toggle("dark");
    
    const aboutMeSection = document.getElementById("about_me");
    aboutMeSection.classList.toggle("dark");
    
    const educationSection = document.getElementById("education");
    educationSection.classList.toggle("dark");
    
    const achievementsSection = document.getElementById("achievements");
    achievementsSection.classList.toggle("dark");
    
    const skillsSection = document.getElementById("skills");
    skillsSection.classList.toggle("dark");
    
    const blogsSection = document.getElementById("blogs");
    blogsSection.classList.toggle("dark");
    
    const secheadingAboutMe = document.querySelector(".secheading_aboutme");
    secheadingAboutMe.classList.toggle("dark");
    
    const secheadingEducation = document.querySelector(".secheading_education");
    secheadingEducation.classList.toggle("dark");
    
    const secheadingAchievements = document.querySelector(".secheading_achievements");
    secheadingAchievements.classList.toggle("dark");
    
    const secheadingSkills = document.querySelector(".secheading_skills");
    secheadingSkills.classList.toggle("dark");
    
    const secheadingBlogs = document.querySelector(".secheading_blogs");
    secheadingBlogs.classList.toggle("dark");
    
    const sectextAboutMe = document.querySelector(".sectext_aboutme");
    sectextAboutMe.classList.toggle("dark");
    
    const sectextEducation = document.querySelector(".sectext_education");
    sectextEducation.classList.toggle("dark");
    
    const sectextAchievements = document.querySelector(".sectext_achievements");
    sectextAchievements.classList.toggle("dark");
    
    const sectextSkills = document.querySelector(".sectext_skills");
    sectextSkills.classList.toggle("dark");
    
    const sectextBlogs = document.querySelector(".sectext_blogs");
    sectextBlogs.classList.toggle("dark");
    
    const label = document.querySelector(".label");
    label.classList.toggle("dark");
});

const label = document.querySelector(".label");

label.addEventListener('click', () => {
    label.classList.toggle("dark");
});
