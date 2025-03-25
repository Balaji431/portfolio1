document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "House Hunting",
            description: "A web app to assist users in finding rental properties.",
            link: "https://househunting.neocities.org/laptop/serivce"
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio to showcase my skills and projects.",
            link: "#"
        }
    ];

    let currentIndex = 0;
    const projectTitle = document.querySelector(".project h3");
    const projectDescription = document.querySelector(".project p");
    const projectLink = document.querySelector(".project a");

    function updateProject() {
        projectTitle.textContent = projects[currentIndex].title;
        projectDescription.textContent = projects[currentIndex].description;
        projectLink.href = projects[currentIndex].link;
    }

    document.querySelector(".prev").addEventListener("click", function() {
        currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
        updateProject();
    });

    document.querySelector(".next").addEventListener("click", function() {
        currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
        updateProject();
    });

    updateProject();
});
