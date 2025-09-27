import React from 'react';
import BlogCard from '../components/BlogCard';
import '../styles/main.css';

const blogPosts = [
	{
		title: 'Monolithic vs Microservices',
		description:
			'Insights from real-world migration projects, highlighting challenges and solutions when evolving backend architectures.',
		url: 'https://medium.com/@jasleen-kaur/monolithic-vs-microservices-b2583088abd7',
		image:
			'https://miro.medium.com/v2/resize:fit:720/format:webp/1*QwQn6QwOQkQwQwQwQwQwQw.png',
	},
	{
		title: "JWT Explained: How it works and why it's not magic",
		description:
			'A practical guide to secure authentication using JWTs, with a focus on implementation details and common pitfalls.',
		url: 'https://jasleen-kaur.medium.com/jwt-explained-how-it-works-and-why-its-not-magic-c1b9b6ade874',
		image:
			'https://miro.medium.com/v2/resize:fit:720/format:webp/1*jwt-preview-image.png',
	},
];

function Blog() {
	return (
		<section id="blog" className="blog-section-elegant">
			<div className="section-header">
				<h2 className="blog-title-elegant">Featured Blog Posts</h2>
			</div>
			<div className="blog-cards-grid">
				{blogPosts.map((post, idx) => (
					<BlogCard key={idx} {...post} />
				))}
			</div>
		</section>
	);
}

// Remove or comment out the old Blog section export if you want to use the new Blogs section instead.
// export default Blog;
export default Blog;
