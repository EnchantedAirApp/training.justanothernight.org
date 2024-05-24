import React from 'react';
import { Container } from 'react-bootstrap';
import './CustomJumbotron.css'; // Import custom CSS for styling

const CustomJumbotron = ({ title, description, buttonText, buttonLink}) => {
  return (
    <div className="custom-jumbotron">
      <Container>
        <h1>{title}</h1>
        <p>{description}</p>
        {buttonText && <button className="btn btn-primary" href={buttonLink}>{buttonText}</button>}
      </Container>
    </div>
  );
};

export default CustomJumbotron;
