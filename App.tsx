
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12 max-w-5xl space-y-12">
        <section id="summary">
          <Summary />
        </section>

        <section id="projects">
          <Projects onProjectClick={setSelectedProject} />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default App;
