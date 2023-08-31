export interface MovieType {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface WatchedType {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  runtime: number;
  imdbRating: number;
  userRating: number;
}
