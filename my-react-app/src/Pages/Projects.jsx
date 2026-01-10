
import React from 'react';
import {useState, useEffect, useRef} from 'react';
import projects from '../assets/projects.json';
import { FaLayerGroup, FaCode }from "react-icons/fa";

function ProjectCard({project}) {

    return (
        <div className="project-card-container">
            <div className="project-preview">
                <img src={project.img} className="project-preview-img"></img>
            </div>
            <h1>
                {project.name}
            </h1>

            <p>
                {project.description}
            </p>

            <button 
                className="project-card-live-demo"
                onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
            >
                Live Demo
            </button>

            <button className="project-card-details">
                Details
            </button>
        </div>
    )
}

function SelectionBar({selected, onChange}) {
    return (
        <div className="selection-bar-container">
            <button 
                onClick={() => onChange('projects')}
                className = {selected === "projects" ? 'sel-btn-active' : 'sel-btn'}
            >
                <FaCode style={{ marginRight: '10', transform: 'scale(0.9) translateY(2px)' }} />
                Projects
            </button>
            <button 
                onClick={() => onChange('skills')}
                className = {selected === "skills" ? 'sel-btn-active' : 'sel-btn'}
            >
                <FaLayerGroup style={{ marginRight: '10', transform: 'scale(0.9)', transform: 'translateY(2px)' }} />
                Skills
            </button>
        </div>
    );
}

function ProjectsBar({projects}) {
    return (
        <div className="projects-grid">
            {projects.map(p => (
                <ProjectCard key={p.id} project={p} />
            ))}
        </div>
    );
}

function SkillsBar() {
    return (
        <div>

        </div>
    );
}

export default function Projects() {
    const [selected, setSelected] = useState('projects');
    const [show,setShow] = useState(false);
    const sectionRef = useRef(null);
    useEffect(() => {
      const el = sectionRef.current;
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShow(true);
          }
          else {
            setShow(false);
          }
        },
        { threshold: 0.25 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, []);
    return (
        <section className="portfolio-section" ref={sectionRef}>
            <div className={`portfolio-container ${show ? 'show' : ''}`}>
                <h1 className="portfolio-title">Portfolio</h1>

                <SelectionBar selected={selected} onChange={setSelected} />

                {selected === 'projects' ? <ProjectsBar projects={projects} /> : <SkillsBar />}
            </div>
        </section>
    );
}