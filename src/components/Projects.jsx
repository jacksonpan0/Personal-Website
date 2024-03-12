import React, { useState, useEffect } from "react";
import "./project.css"

const Projects = () => {
  const [projectsDisplayed, setProjectsDisplayed] = useState([]);
  const [allProjects, setAllProjects] = useState([]);

  const handleClick = (language) => {
    if (language === "All") {
      setProjectsDisplayed(allProjects);
    } else {
      const filteredProjects = allProjects.filter(
        (project) => project.language === language
      );
      setProjectsDisplayed(filteredProjects);
    }
  };

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        return response.json();
      })
      .then((data) => {
        setProjectsDisplayed(data);
        setAllProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

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
        {/* Display projects based on the filtered list */}
        <div id="ProjectsList">
          {projectsDisplayed.map((project, index) => (
            <div key={index} className="ProjectItem">
              {/* Render project information */}
              <p>{project.name}</p>
              <p>Language: {project.language}</p>
              {/* Render project image */}
              <img src={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
