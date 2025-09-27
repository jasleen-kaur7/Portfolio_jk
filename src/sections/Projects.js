import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import '../styles/main.css';

const projects = [
  {
    title: 'COVR for covid resources',
    description: 'A web application for COVID-19 resources aggregation.',
    link: '#'
  },
  {
    title: 'Twitter Backend Application',
    description: 'A scalable backend for a Twitter-like application.',
    link: '#'
  },
  {
    title: 'JSON Beautified - Chrome Extension',
    description: 'A Chrome extension to beautify JSON responses.',
    link: '#'
  }
];

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <Card className="project-card" key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer">View Project</a>}
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
