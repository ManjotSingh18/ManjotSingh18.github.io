import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/groj.jpeg";
import projImg2 from "../assets/img/carj.jpeg";
import projImg3 from "../assets/img/walj.jpeg";
import projImg4 from "../assets/img/medj.jpeg";
import projImg5 from "../assets/img/wip.jpg";


export const Projects = () => {
    const projects = [
        {
          title: "Grosearch",
          description: "A grocery search engine that encompasses several grocers and displays products side-by-side for convenient comparison saving time and money.",
          imgUrl: projImg1,
          gurl: "https://github.com/ManjotSingh18/Grosearch",
          yurl: "https://www.youtube.com/watch?v=YatHC76V7u4",
        },
        {
          title: "Cartelligence",
          description: " An application for classifying vehicles by make, model, and year via a machine learning model trained on the Stanford Car Dataset with the goal of satisfying user curiosity.",
          imgUrl: projImg2,
          gurl: "https://github.com/ManjotSingh18/CarTelligence",
          yurl: "https://www.youtube.com/watch?v=7zG4Jq6KUHk",
        },
        {
          title: "Walmartify",
          description: " A data collection program used to generate spreadsheets based upon product prices from nearby Walmart stores to analyze price discrepancies.",
          imgUrl: projImg3,
          gurl: "https://github.com/ManjotSingh18/Walmartify",
          yurl: "https://www.youtube.com/watch?v=-3wCvsZRcR0",
        },
        {
          title: "Medisee",
          description: "A program based on improving the transparency and accessibility of information pertaining to medications and their adverse effects that provides visualizations of cases from the FDA API.",
          imgUrl: projImg4,
          gurl: "https://github.com/ManjotSingh18/Medisee",
          yurl: "https://www.youtube.com/watch?v=gjNrZncsNDQ",
        },
        {
          title: "WIP",
          description: "Work in progress",
          imgUrl: projImg5,
          gurl: "#",
          yurl: "#",
        },
        {
          title: "WIP",
          description: "Work in progress",
          imgUrl: projImg5,
          gurl: "#",
          yurl: "#",
        },
        {
          title: "WIP",
          description: "Work in progress",
          imgUrl: projImg5,
          gurl: "#",
          yurl: "#",
        },
    ];

    // Helper function to chunk the projects array
    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    // Split projects into chunks of 4
    const projectChunks = chunkArray(projects, 6);

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>When a creative idea pops up in my head the first thing I try to do is integrate it with software. I have experience developing projects based on those ideas, incorporating software into daily life essentials including food, medicine, shopping, and vehicles.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="tab1">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                {projectChunks.map((_, index) => (
                                    <Nav.Item key={index}>
                                        <Nav.Link eventKey={`tab${index + 1}`}>Tab {index + 1}</Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                            <Tab.Content>
                                {projectChunks.map((chunk, index) => (
                                    <Tab.Pane eventKey={`tab${index + 1}`} key={index}>
                                        <Row className="g-4">
                                            {chunk.map((project, projectIndex) => (
                                                <ProjectCard
                                                    key={projectIndex}
                                                    {...project}
                                                />
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
