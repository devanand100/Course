import { ReactNode, useEffect, useRef } from "react";
import { MovieType } from "../types";

type NavbarPorpType = {
  children: ReactNode;
};

function NavBar({ children }: NavbarPorpType) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

export default NavBar;

type PropTypes = {
  movies: MovieType[];
  loading: boolean;
};

export function SearchResult({ movies, loading }: PropTypes) {
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

type SearchBarPropType = {
  query: string;
  setQuery: (arg0: string) => void;
};

export function SearchBar({ query, setQuery }: SearchBarPropType) {
  const elem = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function callback(e: KeyboardEvent) {
      if (document.activeElement === elem.current) return;

      if (e.code === "Enter") {
        if (elem?.current) elem.current.focus();
        setQuery("");
      }
    }
    if (elem?.current) elem.current.focus();
    document.addEventListener("keydown", callback);

    return () => document.removeEventListener("keydown", callback);
  }, [setQuery]);

  return (
    <input
      ref={elem}
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
