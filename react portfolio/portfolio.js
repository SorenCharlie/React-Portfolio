import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Project One',
    image: 'proj1.jpg',
    liveLink: 'urlforproj1.com',
    repoLink: 'https://github.com/username/project-one'
  },
  {
    title: 'Project Two',
    image: 'proj2.jpg',
    liveLink: 'urlforproj2.com',
    repoLink: 'https://github.com/username/project-two'
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
