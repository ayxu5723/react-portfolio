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
    process.env.EMAILJS_SERVICE_ID,
    process.env.EMAILJS_TEMPLATE_ID,
    form.current, 
    process.env.EMAILJS_PUBLIC_KEY
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


   
  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  // const [buttonText, setButtonText] = useState('Send');
  // const [status, setStatus] = useState({});

  // const onFormUpdate = (category, value) => {
  //     setFormDetails({
  //       ...formDetails,
  //       [category]: value
  //     })
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send");
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
  //   if (result.code == 200) {
  //     setStatus({ succes: true, message: 'Message sent successfully'});
  //   } else {
  //     setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
  //   }
  // };

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