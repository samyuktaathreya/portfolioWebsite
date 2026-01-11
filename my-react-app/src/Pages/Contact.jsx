import {FaGithub, FaLinkedin, FaMailBulk, FaSpotify} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function Contact() {
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
    return (
        <section className="contact-section" ref={sectionRef}>
            <div className={`contact-container ${show ? 'show' : ''}`}>
                <h1 className="contact-title">Let's Talk!</h1>
                <div className="contacts-card">
                    {/*Github */}
                    <div className="contact-card">
                        <FaGithub className="contact-logo" />
                        <p className="contact-name">Github</p>
                    </div>
                    {/*LinkedIn */}
                    <div className="contact-card">
                            <FaLinkedin className="contact-logo-linkedin"/>
                        <p className="contact-name">Linkedin</p>
                    </div>
                    {/*Email */}
                    <div className="contact-card">
                        <FaMailBulk className="contact-logo-mail" />
                        <p className="contact-name">Email</p>
                    </div>
                    {/* Spotify */}
                    <div className="contact-card">
                        <FaSpotify className="contact-logo-spotify" />
                        <p className="contact-name">Spotify</p>
                    </div>
                </div>
            </div>
        </section>
    );
}