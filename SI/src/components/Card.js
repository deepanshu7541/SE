import React from "react";
import { CourseCard } from "../style.js"; // Add `.js` extension


const Card = ({ title, term, color }) => {
  return (
    <CourseCard style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <p>{term}</p>
    </CourseCard>
  );
};

export default Card;
