import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-light text-center text-lg-start">
    <Container className="p-4">
      <Row>
        <Col lg="6" md="12" className="mb-4 mb-md-0">
          <h5 className="text-uppercase">Training Site</h5>
          <p>
            Enhance your skills with our comprehensive training programs. Join us to boost your career and achieve your goals.
          </p>
        </Col>
        <Col lg="3" md="6" className="mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled mb-0">
            <li><a href="/" className="text-dark">Home</a></li>
            <li><a href="/about" className="text-dark">About</a></li>
            <li><a href="/courses" className="text-dark">Courses</a></li>
            <li><a href="/contact" className="text-dark">Contact</a></li>
          </ul>
        </Col>
        <Col lg="3" md="6" className="mb-4 mb-md-0">
          <h5 className="text-uppercase">Follow Us</h5>
          <ul className="list-unstyled mb-0">
            <li><a href="#" className="text-dark">Facebook</a></li>
            <li><a href="#" className="text-dark">Twitter</a></li>
            <li><a href="#" className="text-dark">Instagram</a></li>
            <li><a href="#" className="text-dark">LinkedIn</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
    <div className="text-center p-3 bg-dark text-white">
      © {new Date().getFullYear()} Training Site. All rights reserved.
    </div>
  </footer>
);

export default Footer;
