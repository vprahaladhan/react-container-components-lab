import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: '',
    reviews: []
  }

  handleInputChange = ({ target }) => {
    this.setState({
      searchTerm: target.value,
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(response => response.json())
      .then(({ results }) => this.setState({
        searchTerm: '',
        reviews: results
      }))
  }


  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleFormSubmit}>
          <label>Enter search: </label>      
          <input type='text' placeholder='Type to search' value={this.state.searchTerm} onChange={this.handleInputChange} />
          <button type='submit'>Search</button>
        </form>
        {this.state.reviews && <MovieReviews reviews={this.state.reviews} />}
      </div>
    );
  }
}