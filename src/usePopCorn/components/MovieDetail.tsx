import { useEffect, useState } from "react";
import { WatchedType, MovieDetails } from "../types";
import StarRating from "./StarsRating";
import { useFetch } from "../Hooks/useFetch";

type MovieProp = {
  id: string;
  onClose: () => void;
  watched: WatchedType[];
  handleAdd: (arg: WatchedType) => void;
};

function MovieDetail({ id, onClose, watched, handleAdd }: MovieProp) {
  const { data: movie, loading, error } = useFetch<MovieDetails>(`i=${id}`);
  const watchedIds = watched.map((m) => m.imdbID);
  const isWatched = watchedIds.includes(id);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === id
  )?.userRating;
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    document.title = `Movie ${movie?.Title || "usePopCorn"}`;

    return () => {
      document.title = "usePopCorn";
    };
  }, [movie]);

  useEffect(() => {
    function callback(e: KeyboardEvent) {
      if (e.code === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", callback);
    return () => {
      window.removeEventListener("keydown", callback);
    };
  }, [onClose]);

  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return <p className="text-3xl text-center pt-10 my-auto">Loading</p>;
  }

  if (!movie) {
    return <p>Data not found</p>;
  }
  for (const key in movie) {
    if (!(key in movie)) {
      return <p>Data not found</p>;
    }
  }

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const newWatchedMovie: WatchedType = {
    imdbID: id,
    Title: title,
    Year: year,
    Poster: movie.Poster,
    runtime: Number(movie.Runtime),
    imdbRating: Number(movie.imdbRating),
    userRating: userRating,
  };

  return (
    <div className="details">
      <header>
        <div className="btn-back" onClick={onClose}>
          &larr;
        </div>

        <img src={poster} alt={`Poster of ${title} movie`} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>⭐️</span>
            {imdbRating} IMDb rating
          </p>
        </div>
      </header>
      <section>
        <div className="rating">
          {!isWatched ? (
            <>
              <StarRating stars={10} size={24} onSetRating={setUserRating} />
              {userRating > 0 && (
                <button
                  className="btn-add"
                  onClick={() => handleAdd(newWatchedMovie)}
                >
                  + Add to list
                </button>
              )}
            </>
          ) : (
            <p>
              You rated with movie {watchedUserRating} <span>⭐️</span>
            </p>
          )}
        </div>
        <p>
          <em>{plot}</em>
        </p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
    </div>
  );
}

export default MovieDetail;
