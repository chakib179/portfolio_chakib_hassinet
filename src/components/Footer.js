import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://www.linkedin.com/in/chakib-hassinet-122900252/" className="social-link" target="_blank" rel="noreferrer">
                    <FaLinkedin size={22}/>
                </a>  
                <a href="https://github.com/chakib179" className="social-link" target="_blank" rel="noreferrer">
                    <FaGithub size={22}/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
