import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState, useEffect } from "react";
// need to import logo
import { AiFillLinkedin } from 'react-icons/ai';
import { SiGithub } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import logo1 from "../assets/img/logo_transparent_background.png"


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

 const onUpdateActiveLink = (value) => {
  setActiveLink(value);
 }

  return(
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo1} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle> 
    
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className='navbar-text'>
          <div className='social-icons'>
            <a href='https://github.com/ayxu5723' target='_blank' rel="noreferrer" ><SiGithub /></a>
            <a href='https://www.linkedin.com/in/alex-xu-27b217261/' target='_blank' rel="noreferrer"><AiFillLinkedin /></a>
            <a href='https://discordapp.com/users/170444396905496577' target='_blank' rel="noreferrer"><FaDiscord/></a>
          </div>
          <button className="vvd" onClick={() => window.location = "#connect"}><span>Let's Connect</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}