import { Col } from "react-bootstrap";
import git from "../assets/img/github.png";
import utube from "../assets/img/utube.png";


export const ProjectCard = ({title, description, imgUrl, gurl, yurl}) => {
    return (
        <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img className="thumbnail" src={imgUrl} alt="Project Thumbnail" />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <div className="icon-container">
                    <a href={gurl}><img className="git" src={git} alt="GitHub Link" /></a>
                    <a href={yurl}><img className="git" src={utube} alt="YouTube Link" /></a>
                </div>
            </div>
        </div>
    </Col>
    )
}