import React from "react";

export default function Rating(props) {
  const { rating, numReviews, caption } = props;
  return (
    <div className="rating">
      <span>
        {/* Stars icon from font awesome
        cdn in public/index.html */}
        {rating.toFixed(1) + " "}
        <i
          className={
            rating >= 1
              ? "fas fa-star" // full star
              : rating >= 0.3
              ? "fas fa-star-half-alt" // half star
              : "far fa-star" // empty star
          }
        ></i>
        <i
          className={
            rating >= 2
              ? "fas fa-star"
              : rating >= 1.3
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
        <i
          className={
            rating >= 3
              ? "fas fa-star"
              : rating >= 2.3
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
        <i
          className={
            rating >= 4
              ? "fas fa-star"
              : rating >= 3.3
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
        <i
          className={
            rating >= 5
              ? "fas fa-star"
              : rating >= 4.3
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      {caption ? (
        <span>{caption}</span>
      ) : (
        <div className="num-reviews">({numReviews + " reviews"})</div>
      )}
    </div>
  );
}
