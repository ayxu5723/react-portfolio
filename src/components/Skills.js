import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/javascript.png";
import mongo from "../assets/img/mongo.png";
import node from "../assets/img/node.png";
import react from "../assets/img/react.png";
import tailwind from "../assets/img/tailwind.png";
import wordpress from "../assets/img/wordpress.jpg";
import bootstrap from "../assets/img/bootstrap.png";
import resumeFile from '../assets/files/Resume_Alex_Xu2.pdf';
import { FaFileDownload } from 'react-icons/fa';


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Though I am fairly new to coding, I am keen on sharpening my skills to develop the best projects.<br></br>This is only the beginning.</p>
                        <p>Click <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="download_resume">here <FaFileDownload /> </a> to download my resume.</p>
                        <Carousel responsive={responsive} infinite={true} autoPlaySpeed={1000} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="html_icon" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="css_icon" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="js_icon" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="mongo_icon" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="node_icon" />
                                <h5>NodeJs</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="react_icon" />
                                <h5>ReactJs</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="tailwind_icon" />
                                <h5>Tailwind CSS</h5>
                            </div>
                            <div className="item">
                                <img src={wordpress} alt="wordpress_icon" />
                                <h5>WordPress</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="bootstrap_icon" />
                                <h5>Bootstrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="bg_color_splash" />
    </section>
  )
}