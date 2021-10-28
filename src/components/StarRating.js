import React from "react";

const StarRating = ({ count = 1 }) => {
  return "⭐".repeat(count);
};

export default StarRating;
