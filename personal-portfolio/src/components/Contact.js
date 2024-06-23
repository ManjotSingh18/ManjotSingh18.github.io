import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/quill.png";


export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
                <img  src={contactImg} alt="Contact Me"/>
          </Col>
          <Col size={12} md={6}>
                <h2>Get In Touch</h2>
                <form>
                  <Row>
                    <Col size={12} className="px-1">
                      <a href="mailto:manjot.anteater@gmail.com" className="email-button-link">
                        <button type="button">
                          <span>Email</span>
                        </button>
                      </a>
                      
                    </Col>
                    
                  </Row>
                </form>
          </Col>

        </Row>
      </Container>
    </section>
  )
}