import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseList = ({ courses }) => (
  <div className="course-list">
    {courses.map(course => (
      <Card key={course.id} style={{ margin: '1rem' }}>
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Text>{course.description}</Card.Text>
          <Button as={Link} to={`/courses/${course.id}`} variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    ))}
  </div>
);

export default CourseList;
