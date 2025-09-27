import Section from '../components/Section';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Home() {
  return (
    <Section id="home">
      <div className="home-intro">
        <h1>Jasleen Kaur</h1>
        <h2>Senior Software Engineer <span className="at-company">@ S&amp;P Global</span></h2>
        <div className="profile-summary">
          Passionate and results-driven software engineer with 6+ years of experience designing, building, and optimizing scalable backend systems. Adept at leading cross-functional teams, driving automation, and delivering robust solutions in fast-paced environments. Committed to continuous learning and mentoring, with a strong focus on quality, collaboration, and impactful problem-solving.
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/jasleen-kaur7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/jasleen-kaur7" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="mailto:jasleen.kaur7k@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </Section>
  );
}

export default Home;
