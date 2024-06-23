import { Container, Row, Col} from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/udesign.png";
import meter2 from "../assets/img/udesign1.png";
import meter3 from "../assets/img/udesign3.png";
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>Currently, my development flow for full-stack is driven by Python, C++, C#, HTML, CSS, JavaScript, AWS, Azure, and various other tools. I love to work with data scraping, APIs, machine learning, and frameworks such as React, Django and Flask as together they help me achieve my goal of collecting, transforming, and providing data.</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={meter1} alt="Image" />
                                    <h5>Software Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt="Image" />
                                    <h5>Cloud Services</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt="Image" />
                                    <h5>Databases</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt="Image" />
                                    <h5>Scraping</h5>
                                </div>
                               
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}