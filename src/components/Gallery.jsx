// src/components/Gallery.js
import React, { Component } from 'react';
import MovieCard from './MovieCard';
import './Gallery.css';
import Loader from './Loader';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    const { title } = this.props;
    fetch(`http://www.omdbapi.com/?apikey=33224261&s=${title}`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === "True" && data.Search) {
          this.setState({ movies: data.Search.slice(0, 6), loading: false });
        } else {
          this.setState({ movies: [], loading: false, error: 'Nessun film trovato' });
        }
      })
      .catch(error => {
        this.setState({ movies: [], loading: false, error: 'Errore nel caricamento: ' + error.message });
      });
  }

  render() {
    const { movies, loading, error } = this.state;
    return (
      <div className="gallery">
        <h4>{this.props.title}</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {loading ? (
            <Loader />
          ) : error ? (
            <p>{error}</p>
          ) : movies.length > 0 ? (
            movies.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))
          ) : (
            <p>Nessun Film Trovato.</p>
          )}
        </div>
      </div>
    );
  }
}

export default Gallery;
