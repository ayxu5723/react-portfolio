import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, deployedUrl }) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <Button className="proj-btn" variant="primary" href={githubUrl} target='_blank'>GitHub Repo</Button>
          <Button className="proj-btn" variant="primary" href={deployedUrl} target='_blank'>Deployed App</Button>
        </div>
      </div>
    </Col>
  )
}