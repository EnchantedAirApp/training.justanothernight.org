import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  if (!course) return <h2>Course not found</h2>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CourseDetail;