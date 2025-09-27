import React from 'react';
import Section from '../components/Section';
import '../styles/main.css';

const experience = [
	{
		company: 'S&P Global',
		location: 'Mumbai, India',
		title: 'Senior Software Engineer',
		period: 'Nov 2021 - Present',
		bullets: [
			'Architected and deployed a high-throughput Celery and RabbitMQ pipeline within Dockerized microservices for parallel document processing, boosting publishing capacity by 50% and optimizing large-scale financial data computations in an Agile, cloud-native environment.',
			'Implemented advanced precomputed data caching and optimized ticker workflows, reducing MongoDB query overhead and achieving 30–60% performance improvements in real-time financial period calculations.',
			'Built a Slack-integrated bot for automated PDF report distribution using optimized ETL data pipelines and advanced filtering, accelerating computation performance by over 50% and improving team communication.',
			'Designed and deployed a robust automation framework with dynamic compliance validation, enabling early regression detection, automated QA, and strengthening confidence in CI/CD pipelines.',
			'Re-architected metadata generation using the Builder design pattern and partial update computation, reducing SQL load by 40%, improving response times, and enhancing system scalability.',
      'Led code reviews, mentored junior engineers, and promoted best practices in distributed systems, containerization, and DevOps.'
		],
	},
	{
		company: 'LEARNINGMATE',
		location: 'Mumbai, India',
		title: 'Software Engineer',
		period: 'Mar 2021 - Oct 2021',
		bullets: [
			'Enhanced core backend services in a Learning Management System (LMS) used by 50K+ users, streamlining course tracking logic and boosting system reliability and user engagement.',
			'Developed automated test suites using AngularJS, Jasmine, and .NET Web API with SonarQube integration, increasing test coverage by 15% and stabilizing CI/CD pipelines across cloud-deployed services.',
      'Refactored legacy modules to microservices, improving maintainability and scalability of the LMS platform.',
      'Collaborated with cross-functional teams to deliver new features and resolve production issues with rapid turnaround.'
		],
	},
	{
		company: 'U-TO SOLUTIONS',
		location: 'Mumbai, India',
		title: 'Associate Software Engineer',
		period: 'July 2019 – Mar 2021',
		bullets: [
			'Redesigned a core module as a standalone microservice-based sports rights management system, reducing execution latency by 1–2 seconds across critical backend workflows and improving system modularity.',
			'Streamlined ingestion of live telecast data by integrating a broadcast management system and exposing optimized REST APIs, minimizing network overhead, and accelerating real-time data retrieval.',
			'Developed and integrated a high-impact feature into a SaaS platform used by clients such as Sony and Viacom, scaling processing for millions of ad telecasts and improving overall system throughput.',
			'Migrated a legacy MVC-based system to .NET Web APIs, modernizing back-end architecture for real-time reporting, and improving computing efficiency in large-scale media operations.',
      'Implemented CI/CD pipelines and automated deployment scripts, reducing manual release effort and increasing deployment reliability.'
		],
	},
];

function Experience() {
	return (
		<Section id="experience" title="Experience">
			<div className="timeline">
				{experience.map((job, idx) => (
					<div className="timeline-item" key={idx}>
						<h3>
							{job.title} <span>@ {job.company}</span>
						</h3>
						<span className="period">
							{job.period} | {job.location}
						</span>
						<ul>
							{job.bullets.map((b, i) => (
								<li key={i}>{b}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</Section>
	);
}

export default Experience;
