import { Col, Button } from "react-bootstrap";

export const WPProjectCard = ({ title, description, imgUrl, deployedUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <Button className="proj-btn" variant="primary" href={deployedUrl} target='_blank'>Visit Website</Button>
        </div>
      </div>
    </Col>
  )
}