import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => setRating(index);
  const handleMouseEnter = (index) => setHover(index);
  const handleMouseLeave = () => setHover(rating);

  return (
    <div className="star-rating">
      {Array.from({ length: noOfStars }, (_, index) => {
        const starIndex = index + 1;
        const isActive = starIndex <= (hover || rating);

        return (
          <FaStar
            key={starIndex}
            className={isActive ? "active" : "inactive"}
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
}
