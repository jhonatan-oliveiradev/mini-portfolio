import React from 'react';

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>Meus projetos são:</p>
      <a
        href="https://github.com/jhonatan-oliveiradev?tab=repositories"
        className="btn"
        target={'_blank'}
      >
        Ver projetos
      </a>
    </section>
  );
};

export default ProjectsContainer;
