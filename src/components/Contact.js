import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/mail1.png";
import 'animate.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    form.current, 
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
      alert('Message sent successfully');
      console.log(result.text);
    }, (error) => {
      alert('Something went wrong, please try again later')
      console.log(error.text);
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
              <img className="animate__animated animate__zoomIn" src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
                <div className= "animate__animated animate__fadeIn">
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Name" name='user_name' />
                    </Col>

                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" name='user_email' />
                    </Col>

                    <Col size={12} className="px-1">
                      <textarea rows="6" type='text' placeholder="Message" name='message' />
                      <input type="submit" value="Submit"/>
                    </Col>

                  </Row>
                </form> 
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}