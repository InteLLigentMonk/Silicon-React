import { useId } from 'react';

function CommentCard({ testimonial }) {
  function handleStarRating(rating) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <i key={useId()} className="fa-solid fa-star star-filled"></i>
      );
    }
    for (let i = 5; i > rating; i--) {
      stars.push(<i key={useId()} className="fa-solid fa-star"></i>);
    }
    return stars;
  }

  return (
    <div className="comment-card">
      <div className="quote-box">
        <i className="fa-solid fa-quote-left fa-xl"></i>
      </div>
      <div className="comment">
        <div className="rating">
          {handleStarRating(testimonial.starRating).map((star) => star)}
        </div>
        <cite>{testimonial.comment}</cite>
        <div className="user">
          <figure className="avatar">
            <img src={testimonial.avatarUrl} alt="avatar" />
          </figure>
          <div className="user-details">
            <h6>{testimonial.author}</h6>
            <small>{testimonial.jobRole}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CommentCard;
