import { getTrending } from '../API/Api';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Movies.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(setTrendingMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <div className={styles['movies-list']}>
        {trendingMovies.map(movie => (
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
    </>
  );
};

export default Home;
