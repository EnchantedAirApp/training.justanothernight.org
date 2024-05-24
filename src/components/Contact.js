import React from 'react';
import { Container, Button } from 'react-bootstrap';
import CustomJumbotron from './CustomJumbotron'
const Contact = () => (
  <Container>
    <CustomJumbotron title="Contact Us About Training" description="Learn new skills and advance your career with our comprehensive courses." buttonText="Explore Courses" buttonLink="/courses" />
  </Container>
);

export default Contact;
