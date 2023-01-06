import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState, useEffect } from "react";
// need to import logo
import { AiFillHome, AiFillFolderOpen, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { SiGithub } from "react-icons/si";
import { HiAcademicCap } from "react-icons/hi2";
import { FaDiscord } from "react-icons/fa";


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
        <img src={''} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle> 
    
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><AiFillHome />Home</Nav.Link>
          <Nav.Link href="#link" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}><HiAcademicCap/>Skills</Nav.Link>
          <Nav.Link href="#link" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><AiFillFolderOpen />Projects</Nav.Link>
        </Nav>
        <span className='navbar-text'>
          <div className='social-icons'>
            <a href='#'><SiGithub /></a>
            <a href='#'><AiFillLinkedin /></a>
            <a href='discordapp.com/users/170444396905496577'><FaDiscord/></a>
          </div>
          <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}