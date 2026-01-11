
import React from 'react';
import {useState, useEffect, useRef} from 'react';
import projects from '../assets/projects.json';
import { FaLayerGroup, FaCode, FaCaretDown }from "react-icons/fa";

const scrollToSection = (id) => {
  if (typeof window === 'undefined') return;
  const container = document.getElementById('sections');
  const target = document.getElementById(id);
  target.scrollIntoView({behavior: 'smooth', block: 'end'});
};

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
            <div className="project-card-actions">
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
                <div className="projects-button-portfolio">
                    <FaCode style={{ marginRight: '10', transform: 'scale(0.9) translateY(2px)' }} />
                    Projects
                </div>
            </button>
            <button 
                onClick={() => onChange('skills')}
                className = {selected === "skills" ? 'sel-btn-active' : 'sel-btn'}
            >
                <div className="skills-button-portfolio">
                    <FaLayerGroup style={{ marginRight: '10', transform: 'scale(0.9) translateY(2px)' }} />
                    Skills
                </div>
            </button>
        </div>
    );
}

function ProjectsBar({projects, lastProjectCard}) {
    return (
        <div className="projects-grid">
            {projects.map(p => (
                <ProjectCard key={p.id} project={p} />
            ))}

            <div ref={lastProjectCard} style={{height: "1px"}} id="lastProject"></div> {/* empty div just to check if the last card is visible*/}
        </div>
    );
}

function SkillsBar() {
    return (
        <div>

        </div>
    );
}

function ShowMoreBtn() {
    return (
        <button className="show-more-btn"
        onClick = {() => scrollToSection("lastProject")}>
            <FaCaretDown className="bounce" />
        </button>
    );
}

export default function Projects() {
    const [selected, setSelected] = useState('projects');
    const [show,setShow] = useState(false);
    const sectionRef = useRef(null);
    useEffect(() => {
        const rootEl = document.querySelector('.sections');
        const el = sectionRef.current;
        if (!el || !rootEl) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShow(true);
          }
          else {
            setShow(false);
          }
        },
        { root:rootEl, threshold: 0.25 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    const lastProjectCard = useRef(null);
    const [showMoreBtn, setShowMoreBtn] = useState(true);
    useEffect(() => {
        const rootEl = document.querySelector('.sections');
        const el = lastProjectCard.current;
        if (!el || !rootEl) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowMoreBtn(false);
                }
                else {
                    setShowMoreBtn(true);
                }
            },
            { root:rootEl, threshold: 1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [selected]);

    return (
        <section className="portfolio-section" ref={sectionRef}>
            <div className={`portfolio-container ${show ? 'show' : ''}`}>
                <h1 className="portfolio-title">Portfolio</h1>

                <SelectionBar selected={selected} onChange={setSelected} />

                {selected === 'projects' ? <ProjectsBar projects={projects} lastProjectCard={lastProjectCard}/> : <SkillsBar />}
            </div>
            {selected === 'projects' && show && showMoreBtn ? <ShowMoreBtn/> : null}
        </section>
    );
}