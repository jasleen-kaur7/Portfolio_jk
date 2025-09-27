import React from 'react';
import { FaCertificate, FaMedal, FaLinkedin, FaSchool } from 'react-icons/fa';
import Card from '../components/Card';

const certificates = [
	{
		provider: 'HackerRank',
		icon: <FaMedal />,
		items: ['Problem Solving', 'SQL (Intermediate)'],
	},
	{
		provider: 'Newton School',
		icon: <FaSchool />,
		items: [
			'Strengthened problem-solving skills and mastered Data Structures & Algorithms, applying them in real-world coding challenges.',
			'Gained hands-on experience in ReactJS and NodeJS by building full-stack applications with modern web practices.',
			'Participated in multiple hackathons and coding contests, enhancing teamwork, rapid prototyping, and solution-driven development.',
		],
	},
	{
		provider: 'LinkedIn',
		icon: <FaLinkedin />,
		items: ['C#', 'Python', 'SQL', 'MongoDB', 'HTML'],
	},
	{
		provider: 'Coursera',
		icon: <FaCertificate />,
		items: [
			'Introduction to Structured Query Language (SQL)',
			'Programming for Everybody & Data Structures in Python.',
		],
	},
];

function Certificates() {
	return (
		<section id="certificates">
			<div className="section-header">
				<h2>Certificates & Training</h2>
			</div>
			<div className="certificates-grid-provider certificates-grid-provider--spaced">
				{certificates.map((certBlock) => (
					<Card className="cert-provider-block cert-provider-block--spaced" key={certBlock.provider}>
						<div className="cert-provider-title">
							<span className="provider-icon">{certBlock.icon}</span>
							<span>{certBlock.provider}</span>
						</div>
						<ul className="cert-list">
							{certBlock.items.map((item, i) => (
								<li key={i} className="cert-list-item">
									<span className="cert-list-title">{item}</span>
								</li>
							))}
						</ul>
					</Card>
				))}
			</div>
		</section>
	);
}

export default Certificates;
