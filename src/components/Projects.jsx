import React, { useState, useEffect } from "react";
import "./project.css"

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  useEffect(() => {
    // Fetch data from JSON file
    fetch("projects.json")
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data); // Initially, display all projects
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleClick = language => {
    // Filter projects based on selected language
    const filtered = projects.filter(project => project.language === language);
    setFilteredProjects(filtered);
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
        <div className="ProjectsList">
          {filteredProjects.map((project, index) => (
            <div key={index} className="ProjectItem">
              <img src={project.image} alt={project.name} />
              <p>{project.name}</p>
              <p>{project.language}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
