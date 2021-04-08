// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => {
  return (
    <ul className='review-list'>
      {
        reviews.map(review => 
          <li className='review' key={review.display_title}>
            <h3>{review.display_title}</h3>
            <p>{review.mpaa_rating}</p>
            <p>{review.byline}</p>
            <p>{review.headline}</p>
            <p>{review.summary_short}</p>
            <p>{review.publication_date}</p>
          </li>
        )
      }
    </ul>
  );
}

export default MovieReviews;