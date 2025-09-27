import React from 'react';
import Navbar from './sections/Navbar';
import Home from './sections/Home';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Certificates from './sections/Certificates';
import Blogs from './sections/Blogs';
import Contact from './sections/Contact';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Certificates />
        <Achievements />
        <Blogs />
        <Contact />
      </main>
    </div>
  );
}

export default App;
