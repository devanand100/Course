import { useEffect, useState } from "react";
import NavBar, { SearchBar } from "./components/NavBar";
import Main from "./components/main";
import { SearchResult } from "./components/NavBar";
import { MovieList } from "./components/MoviesList";
import Box from "./components/Box";
import { SummaryBox } from "./components/SummaryBox";
import { WatchedMoviesList } from "./components/WatchedMoviesList";
import MovieDetail from "./components/MovieDetail";
import { MovieType, WatchedType } from "./types";

export const KEY = "df8e05f4";
export const HOSTMOVIE = `http://www.omdbapi.com/?apikey=${KEY}&`;

function App() {
  const [movies, setMovies] = useState<MovieType[] | null>([]);
  const [watched, setWatched] = useState<WatchedType[]>(() =>
    JSON.parse(localStorage.getItem("watched") ?? "[]")
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    let timer: number;
    if (query.length > 0) {
      setError("");
      setLoading(true);
      timer = setTimeout(movieData, 1000);
    } else {
      setMovies([]);
      setError("");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  return (
    <>
      <NavBar>
        {query.length > 0 && movies && (
          <SearchResult movies={movies} loading={loading} />
        )}
        <SearchBar
          query={query}
          setQuery={(query: string) => {
            setQuery(query);
            setSelectedId("");
          }}
        />
      </NavBar>
      <Main>
        <Box>
          {query.length === 0 && !error && !loading && (
            <p className="text-3xl text-center pt-10">Enter Search Query</p>
          )}
          {error && <p className="text-3xl text-center pt-10">{error}</p>}
          {loading && !error && (
            <h1 className="text-3xl text-center pt-10">Loading....</h1>
          )}
          {!loading && !error && movies && (
            <MovieList
              movies={movies}
              onSelectMovie={(id: string) => setSelectedId(id)}
            />
          )}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetail
              id={selectedId}
              onClose={() => setSelectedId("")}
              watched={watched}
              handleAdd={handleAdd}
              key={selectedId}
            />
          ) : (
            <>
              <SummaryBox watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );

  function handleAdd(data: WatchedType) {
    setWatched([...watched, data]);
  }

  async function movieData() {
    try {
      setError("");
      const res = await fetch(`${HOSTMOVIE}s=${query}`);
      if (!res.ok) {
        throw new Error("Something went wrong ,Try again");
      }
      const data = await res.json();
      setLoading(false);

      if ("Search" in data) {
        setMovies(data.Search);
      } else {
        setMovies([]);
        throw new Error("0 Movies Found");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  }
}

export default App;
