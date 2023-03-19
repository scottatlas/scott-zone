import React from "react";
import ProjectItem from "./ProjectItem";
import "../styles/Projects.css";

function Projects() {
  const projectsData = [
    {
      title: "Bankist",
      intro:
        "Bankist is a demo of front-end web development skills, showcasing a range of technologies and techniques to create a responsive and engaging user experience. From the use of HTML and CSS for layout and styling, to JavaScript and jQuery for interactive elements and animations, the Bankist website demonstrates a deep understanding of modern web development practices. With its clean and modern design, intuitive navigation, and engaging user interface, Bankist is the perfect example of how to create a high-quality and effective website that engages users and drives results",
      link: "https://scott-bankist.netlify.app",
    },
    {
      title: "Mapty",
      intro:
        "Mapty is a demo fitness app that helps users track their running and cycling activities. With its intuitive interface, Mapty makes it easy to log your workouts and monitor your progress over time. Whether you're an avid runner or cyclist, or just looking to get started, Mapty can help you document your activity history. With built-in mapping features, you can easily plan routes for your workouts and explore new locations. Whether you're training for a race or just want to stay healthy and active, Mapty is the perfect tool to help you reach your fitness goals.",
      link: "https://scott-mapty.netlify.app",
    },
    {
      title: "Forkify",
      intro:
        "Forkify is a recipe search engine that helps you find and save your favorite recipes. With Forkify, you can browse thousands of recipes from around the world and easily filter them by ingredients or dietary restrictions. You can also save and organize your favorite recipes in your own personal cookbook. Whether you're a seasoned chef or just learning your way around the kitchen, Forkify is the perfect tool to help you discover new and delicious recipes.",
      link: "https://scott-forkify.netlify.app",
    },
    {
      title: "Pathfinding\nSimulator",
      intro:
        "The simulator tool is mainly developed for exploring Antarctica, but it could be also used in certain ways. It helps users to find the shortest route based on the map uploaded. We believed it could be the prototype and foundation of many applications. Our simulator is designed to use the logic of 2D arrays and an algorithm of converting images into numbers on the RGB scale (0-255). The user or client will choose two points from the map best represented in contour lines. The numbers define the altitude, the higher the number the higher the altitude.",
      link: "https://scott-rnd.netlify.app",
    },
    // {
    //   title: "Project Five",
    //   intro: "This is an introduction to project five.",
    //   link: "https://www.example.com/project-five",
    // },
  ];

  return (
    <div id="projects" className="projects-container">
      <h2>Projects</h2>
      <div className="project-list-container">
        {projectsData.map((project) => (
          <ProjectItem
            title={project.title}
            intro={project.intro}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
