/* Author: Giovanna Lorena Delgado Mendoza*/
/*For average agent rating stars*/

import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/starRating.css';

const StarRating = ({ rating, marginTop }) => {
  const stars = [];
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
    } else if (hasHalfStar && i === filledStars) {
      stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={i} />);
    } else {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} style={{ opacity: 0.2 }} />);
    }
  }

  return <div className="starRating" style={{ marginTop: marginTop }}>{stars}</div>;
};

export default StarRating;