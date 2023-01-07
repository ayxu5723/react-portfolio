import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { WPProjectCard } from "./WPProjectCard";
import gratitude from "../assets/img/Gratitude_home.png";
import notetaker from "../assets/img/notetaker.png";
import Pwgen1 from "../assets/img/Pwgen1.png";
import satisfy from "../assets/img/satisfy.png";
import techblog from "../assets/img/techblog.png";
import ecommerce from "../assets/img/ecommerce1.jpg";
import zhengceramics from "../assets/img/zheng_ceramics.png"

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Gratitude",
      description: "Learn to be grateful",
      imgUrl: gratitude,
      githubUrl: "https://github.com/ayxu5723/Gratitude-project",
      deployedUrl: 'https://murmuring-meadow-90754.herokuapp.com/',
    },
    {
      title: "NoteTaker",
      description: "Take some quick notes in your browser",
      imgUrl: notetaker,
      githubUrl: "https://github.com/ayxu5723/note_taker",
      deployedUrl: 'https://note-taker-ayx.herokuapp.com/',
    },
    {
      title: "Password Generator",
      description: "Awesome random passwords with customizable parameters",
      imgUrl: Pwgen1,
      githubUrl: "https://github.com/ayxu5723/Javascript-PW-Gen",
      deployedUrl: 'https://ayxu5723.github.io/Javascript-PW-Gen/',
    },
    {
      title: "Satisfy",
      description: "Eat in or eat out?",
      imgUrl: satisfy,
      githubUrl: "https://github.com/ayxu5723/07-Project-Satisfy",
      deployedUrl: 'https://juanmarquez4.github.io/07-Project-Satisfy/',
    },
    {
      title: "TechBlog",
      description: "What's your favorite language?",
      imgUrl: techblog,
      githubUrl: "https://github.com/ayxu5723/Tech-Blog",
      deployedUrl: 'https://boiling-basin-74246.herokuapp.com/',
    },
    {
      title: "Ecommerce Backend",
      description: "Basic building blocks for any ecommerce site",
      imgUrl: ecommerce,
      githubUrl: "https://github.com/ayxu5723/e-commerce-back-end",
      deployedUrl: 'https://drive.google.com/file/d/1SUFCH09Iefz-0ED6OtJIF5I9q4nft3fJ/view',
    },
  ];
  const wpprojects = [
    {
      title: "Zheng Ceramics",
      description: "Learn the art of ceramics",
      imgUrl: zhengceramics,
      deployedUrl: 'https://zhengceramics.com/',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">WordPress</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          wpprojects.map((project, index) => {
                            return (
                              <WPProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}