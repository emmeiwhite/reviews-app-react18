import React from "react";
import "./Review.css";

export default function Review({
  id,
  name,
  job,
  image,
  text,
  handlePrev,
  handleNext,
  handleSurprise,
}) {
  return (
    <article className="review-card">
      <div className="image-container">
        <img
          src={image}
          alt={job}
        />
      </div>

      <h3> {name}</h3>

      <p>{text}</p>

      <div className="prev-next">
        <span onClick={() => handlePrev(id)}>◀️</span>
        <span onClick={() => handleNext(id)}>▶️</span>
      </div>

      <div className="btn-container">
        <button
          onClick={handleSurprise}
          className="btn"
        >
          surprise
        </button>
      </div>
    </article>
  );
}
