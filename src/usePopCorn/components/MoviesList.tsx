import { MovieType } from "../types";

type MoviesListProp = {
  movies: MovieType[];
};

export function MovieList({ movies }: MoviesListProp) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} />
      ))}
    </ul>
  );
}

type MovieProp = {
  movie: MovieType;
};
export function Movie({ movie }: MovieProp) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
