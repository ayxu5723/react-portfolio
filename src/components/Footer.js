import { Container, Row, Col } from "react-bootstrap";
import { AiFillLinkedin } from 'react-icons/ai';
import { SiGithub } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import logo1 from "../assets/img/logo_transparent_background.png"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo1} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icons">
            <a href='https://github.com/ayxu5723' target='_blank' rel="noreferrer" ><SiGithub /></a>
            <a href='https://www.linkedin.com/in/alex-xu-27b217261/' target='_blank' rel="noreferrer"><AiFillLinkedin /></a>
            <a href='https://discordapp.com/users/170444396905496577' target='_blank' rel="noreferrer"><FaDiscord/></a>
            </div>
            <p>Copyright 2023. Alex Xu</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}