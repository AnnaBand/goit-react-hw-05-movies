import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getMoviesByKeyword } from '../API/Api';
import styles from './Movies.module.css'; // Importujemy style dla plakatów

const SearchMovies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false); // Dodajemy stan, który określa, czy przeprowadzono już wyszukiwanie
  const location = useLocation();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Please enter a search query');
      return;
    }

    try {
      const movies = await getMoviesByKeyword(searchQuery);
      setSearchResults(movies);
      setSearched(true); // Ustawiamy stan, że wyszukiwanie zostało przeprowadzone
    } catch (error) {
      console.error('Error searching movies:', error);
      setSearchResults([]);
      setSearched(true); // Ustawiamy stan, że wyszukiwanie zostało przeprowadzone, nawet jeśli nie ma wyników
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {searched && searchResults.length === 0 && (
        <div>No results found for "{searchQuery}". Please try again.</div>
      )}

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <div className={styles['movies-list']}>
            {searchResults.map((movie) => (
              <NavLink key={movie.id} to={`/movies/${movie.id}`} state={{ from: location }}>
                <div className={styles['movie-item']}>
                  <img
                    src={
                      movie.poster_path
                        ? `https://www.themoviedb.org/t/p/w500/${movie.poster_path}`
                        : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
                    }
                    alt={movie.title}
                    className={styles['movie-poster']}
                  />
                  <span className={styles['movie-title']}>{movie.title}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchMovies;
