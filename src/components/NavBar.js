import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState, useEffect } from "react";
// need to import logo
import { AiFillHome, AiFillFolderOpen, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
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
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><img src={AiFillHome} alt="home_icon" />Home</Nav.Link>
          <Nav.Link href="#link" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}><img src={HiAcademicCap} alt="skill_icon" />Skills</Nav.Link>
          <Nav.Link href="#link" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><img src={AiFillFolderOpen} alt="folder_icon" />Projects</Nav.Link>
        </Nav>
        <span className='navbar-text'>
          <div className='social-icons'>
            <a href='#'><img src={AiFillGithub} alt="github_icon" /></a>
            <a href='#'><img src={AiFillLinkedin} alt="linkedin_icon" /></a>
            <a href='discordapp.com/users/170444396905496577'><img src={FaDiscord} alt="discord_icon" /></a>
          </div>
          <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}