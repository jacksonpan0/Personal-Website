import React, { useState, useEffect } from "react";
import "./project.css"
import projectsData from "./projects.json";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData); // Initializing projects state with the JSON data

  const handleClick = (language) => {
    if (language === "All") {
      setProjects(projectsData); // If "All" is clicked, set projects to all projects
    } else {
      const filteredProjects = projectsData.filter(
        (project) => project.language === language
      ); // Filter projects based on the selected language
      setProjects(filteredProjects);
    }
  };
  return (
    <div id="Projects">
      <div id="ProjectsHeader">Projects</div>
      <p id="ProjectsDescription">
        Here are some of the projects I've worked on during my academic journey
        and personal explorations:
      </p>
      <div id="ProjectsDisplayContainer">
        <div id="ProjectsButtonsContainer">
          <button onClick={() => handleClick("All")}>All</button>
          <button onClick={() => handleClick("JavaScript")}>JavaScript</button>
          <button onClick={() => handleClick("Java")}>Java</button>
          <button onClick={() => handleClick("C")}>C</button>
        </div>
      </div>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h2>{project.name}</h2>
            <p>Language: {project.language}</p>
            <img src={project.image} alt={project.name} />
          </div>
        ))}
      </div>
    </div >
  );
};

export default Projects;
