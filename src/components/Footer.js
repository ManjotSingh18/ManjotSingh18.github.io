import { Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
export const Footer = () => {
    return (
        <footer className="footer">

            <Row className="align-item-center">

                <Col size={12} sm={6}>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/manjot-singh18/"><img src={navIcon1} alt="Icon" /></a>
                        <a href="https://github.com/ManjotSingh18"><img src={navIcon2} alt="Icon" /></a>
                        <a href="https://www.youtube.com/channel/UC2wxQ0Cm_WizQtU6YWO5dFw"><img src={navIcon3} alt="Icon" /></a>
                    </div>
                    <p class="copyright" >Copyright 2024. All Rights Reserved</p>
                </Col>
            </Row>
        </footer>
    )
}