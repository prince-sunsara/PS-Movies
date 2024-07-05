import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Movie, MovieContextType } from "./types";
import axios from "axios";

const defaultState: MovieContextType = {
  movies: [],
  fetchMovies: () => {},
  fetchMovieById: () => {},
  loading: false,
  error: null,
  movie: null,
};

const MovieContext = createContext<MovieContextType>(defaultState);

export const MovieProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // method: GET
  // fetch movie
  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://api.tvmaze.com/shows");
      // console.log("response", response);
      setMovies(response.data);
    } catch (err: any) {
      setError(err.message);
      console.log("Error from fetching movies", error);
    } finally {
      setLoading(false);
    }
  };

  // method: GET
  // fetch single movie'
  const fetchMovieById = async (id: number) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setMovie(response.data);
    } catch (err: any) {
      setError(err.message);
      console.log("Error while fetching single Movie", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{ movies, loading, error, fetchMovies, movie, fetchMovieById }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = (): MovieContextType => {
  return useContext(MovieContext);
};
