import { MovieType } from "../types";

type MoviesListProp = {
  movies: MovieType[];
  onSelectMovie: (arg0: string) => void;
};

export function MovieList({ movies, onSelectMovie }: MoviesListProp) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} onSelectMovie={onSelectMovie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

type MovieProp = {
  movie: MovieType;
  onSelectMovie: (arg0: string) => void;
};
export function Movie({ movie, onSelectMovie }: MovieProp) {
  return (
    <li
      className="cursor-pointer"
      key={movie.imdbID}
      onClick={() => onSelectMovie(movie.imdbID)}
    >
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
