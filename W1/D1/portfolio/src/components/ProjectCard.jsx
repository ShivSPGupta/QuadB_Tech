import React from 'react';

function ProjectCard({ title, image, description, skill }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{skill}</p>
    </div>
  );
}

export default ProjectCard;
