import React from 'react';
import { Container, Button } from 'react-bootstrap';
import CustomJumbotron from './CustomJumbotron'
const About = () => (
  <Container>
    <CustomJumbotron title="Welcome to the Training Site" description="Learn new skills and advance your career with our comprehensive courses." buttonText="Explore Courses" buttonLink="/courses" />
  </Container>
);

export default About;
