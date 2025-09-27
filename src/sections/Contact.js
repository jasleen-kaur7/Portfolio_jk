import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';



function Contact() {
  return (
    <section id="contact">
      <div className="contact-card">
        <div className="section-header centered-header">
          <h2>Get in touch</h2>
        </div>
        <p className="contact-intro">
          I’m excited to connect with fellow engineers, teams, and innovators for new opportunities, impactful projects, or creative collaborations.<br />
          Let’s build something great together!
        </p>
        <div className="contact-icons contact-icons-large" style={{ justifyContent: 'center', display: 'flex', width: '100%' }}>
          <a href="tel:+917021436220" aria-label="Phone" style={{ fontSize: '1.2em' }}><FaPhoneAlt /></a>
          <a href="https://www.linkedin.com/in/jasleen-kaur7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/jasleen-kaur7" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="mailto:jasleen.kaur7k@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
        <div style={{ textAlign: 'center', marginTop: '0.5em' }}>
          <a href="https://drive.google.com/file/d/1QwQw1kQwQw1kQwQw1kQwQw1kQwQw1kQw/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            background: '#00bcd4',
            color: '#fff',
            padding: '0.6em 1.4em',
            borderRadius: '6px',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '1.08rem',
            boxShadow: '0 2px 8px rgba(0,188,212,0.10)',
            transition: 'background 0.2s'
          }}>View Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
