import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';



const StarRating = ({ rating, totalStars = 5 }) => {

  const stars = [];

 
  for (let i = 1; i <= totalStars; i++) {
    if (rating >= i) {
    
      stars.push(<FaStar key={i} color="#ffc107" />);
    } else if (rating >= i - 0.5) {
   
      stars.push(<FaStarHalfAlt key={i} color="#ffc107" />);
    } else {
  
      stars.push(<FaRegStar key={i} color="#ffc107" />);
    }
  }

  return <div className="card-rating">{stars}</div>;
};

export default StarRating;