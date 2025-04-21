import React from 'react';
import ProjectCard from './ProjectCard';
import { projectData } from '../data/projectData';

function Projects() {
  return (
    <section className="projects">
      <h2>📁 My Projects</h2>
      <div className="project-list">
        {projectData.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            skill={project.skill}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
