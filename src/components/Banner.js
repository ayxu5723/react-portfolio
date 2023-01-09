import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import devImg from "../assets/img/developer_img.png";
import 'animate.css';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full-Stack Web Developer", "WordPress Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div className="animate__animated animate__fadeIn">
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Alex`} <br/> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full-Stack Web Developer", "WordPress Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I can build and design websites/apps from scratch or modify existing frameworks to suit your needs. As an experienced writer, I am also able to create SEO friendly content to boost visibility.</p>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <div className="animate__animated animate__zoomIn">
                  <img src={devImg} alt="Developer Img"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}