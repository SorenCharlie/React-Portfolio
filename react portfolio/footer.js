import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Project One',
    image: 'project-one-image.jpg',
    liveLink: 'https://live-url-for-project-one.com',
    repoLink: 'https://github.com/your-username/project-one'
  },
  {
    title: 'Project Two',
    image: 'project-two-image.jpg',
    liveLink: 'https://live-url-for-project-two.com',
    repoLink: 'https://github.com/your-username/project-two'
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

  