import React from 'react';
import '../styles/main.css';

const skillGroups = [
  {
    title: 'Languages',
    items: ['C#', 'Python', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['.NET', 'Django', 'Flask', 'Node.js', 'Express', 'React', 'Redux'],
  },
  {
    title: 'DevOps & Cloud',
    items: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Jenkins', 'GitHub Actions', 'CI/CD'],
  },
  {
    title: 'Databases & Messaging',
    items: ['MySQL', 'MS SQL', 'MongoDB', 'Redis', 'PostgreSQL', 'RabbitMQ', 'Kafka'],
  },
  {
    title: 'Tools & Monitoring',
    items: ['Git', 'Grafana', 'Prometheus'],
  },
  {
    title: 'Testing & Quality',
    items: ['Unit Testing', 'Integration Testing', 'SonarQube'],
  },
  {
    title: 'Other',
    items: [
      'Microservices', 'Distributed Systems', 'REST APIs', 'GraphQL',
      'System Design', 'Problem Solving', 'Debugging', 'Agile', 'Scrum', 'Mentoring', 'Collaboration', 'Communication'
    ],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="section-header">
        <h2>Skills</h2>
      </div>
      <div className="skills-groups-container">
        {skillGroups.map((group, idx) => (
          <div className="skills-group" key={idx}>
            <div className="skills-group-title">{group.title}</div>
            <div className="skills-group-list">
              {group.items.map((skill, i) => (
                <span className="skill-badge" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
