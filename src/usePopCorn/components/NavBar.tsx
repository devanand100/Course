import { ReactNode, useState } from "react";
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
};

export function SearchResult({ movies }: PropTypes) {
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

export function SearchBar() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
