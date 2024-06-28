
import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => (
  <div className="movie-card col mb-2 text-center px-1">
    <div className="movie-card-img-wrapper">
      <img className="movie-card-img" src={movie.Poster} alt={movie.Title} />
    </div>
  </div>
);

export default MovieCard;
