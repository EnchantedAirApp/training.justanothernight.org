import React from 'react';
import { Container, Button } from 'react-bootstrap';
import CustomJumbotron from './CustomJumbotron'
import CourseList from './CourseList';
const courselist = [ {id:'broadwayintroprogramming', title:'Broadway Community Center/:Introduction To Programming',description:'Introduction To React JS Programming for Broadway Community Center'}]
const Courses = () => (
  <Container>
    <CustomJumbotron title="Welcome to the Training Site" description="Learn new skills and advance your career with our comprehensive courses." buttonText="Explore Courses" buttonLink="/courses" />
<CourseList courses={courselist}/>
</Container>)
export default Courses;
