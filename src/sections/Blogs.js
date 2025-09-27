import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { fadeInUp, staggerContainer } from '../utils/animations';

// Use placeholder images since assets/images is empty
const blogPosts = [
  {
    title: 'Monolithic vs Microservices',
    description: 'Insights from real-world migration projects, highlighting challenges and solutions when evolving backend architectures.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    url: 'https://medium.com/@jasleen-kaur/monolithic-vs-microservices-b2583088abd7',
    date: 'Jan 10, 2024',
    readTime: '6 min read'
  },
  {
    title: "JWT Explained: How it works and why it's not magic",
    description: 'A practical guide to secure authentication using JWTs, with a focus on implementation details and common pitfalls.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    url: 'https://jasleen-kaur.medium.com/jwt-explained-how-it-works-and-why-its-not-magic-c1b9b6ade874',
    date: 'Feb 2, 2024',
    readTime: '5 min read'
  }
];

const BlogsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors?.textLight || '#e0e6ed'};
`;

const BlogGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled(motion.a)`
  background-color: ${({ theme }) => theme.colors?.secondary || '#232b36'};
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  transition: 0.2s box-shadow, 0.2s transform;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 24px rgba(0,188,212,0.13);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 32px rgba(0,188,212,0.22);
    .image-overlay {
      opacity: 0.2;
    }
    .blog-title {
      color: ${({ theme }) => theme.colors?.accent || '#00bcd4'};
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;
`;

const BlogImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors?.primary || '#00bcd4'};
  opacity: 0.4;
  transition: 0.2s opacity;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const BlogTitle = styled.h3`
  color: ${({ theme }) => theme.colors?.textLight || '#e0e6ed'};
  font-size: 1.2rem;
  margin-bottom: 1rem;
  transition: 0.2s color;
`;

const BlogDescription = styled.p`
  color: ${({ theme }) => theme.colors?.text || '#b0bec5'};
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors?.text || '#b0bec5'};
  font-size: 0.8rem;
  font-family: inherit;
`;

const Blogs = () => {
  return (
    <Section id="blogs">
      <BlogsContainer>
        <Title>Technical Blog Posts</Title>
        <BlogGrid
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
            >
              <ImageContainer>
                <BlogImage src={post.image} alt={post.title} />
                <ImageOverlay className="image-overlay" />
              </ImageContainer>
              <BlogContent>
                <BlogTitle className="blog-title">{post.title}</BlogTitle>
                <BlogDescription>{post.description}</BlogDescription>
                <BlogMeta>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </BlogMeta>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>
      </BlogsContainer>
    </Section>
  );
};

export default Blogs;

