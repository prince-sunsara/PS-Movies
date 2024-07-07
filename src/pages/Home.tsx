import React from "react";
import { FaPlay, FaPlus } from "react-icons/fa";
import { useMovies } from "../api/api";
import { MovieCurousle } from "../components";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { movies, loading, error, fetchMovies, movie, fetchMovieById } =
    useMovies();

  return (
    <div className="relative h-screen bg-black text-white">
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.redd.it/76u7q5kqua951.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90">
          <div className="m-8 z-10 max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">PS Movies</h1>
            <p className="text-xl md:text-2xl mb-2">
              Find all type of movies, shows etc.
            </p>
            <div className="flex items-center mb-4">
              <span className="mr-2">⭐⭐⭐⭐</span>
              <span>rated by 2500+</span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
              <Link
                to="/gallary"
                className="flex items-center justify-center bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition duration-300 w-full sm:w-auto"
              >
                <FaPlay className="mr-2" /> Gallery
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition duration-300 w-full sm:w-auto"
              >
                <FaPlus className="mr-2" /> Contact Us
              </Link>
            </div>
            <p className="text-sm md:text-base max-w-md">
              Welcome to PS Movies, your ultimate destination for discovering,
              exploring, and watching a wide array of films. Find detailed
              information, trailers, and reviews for your favorite movies.
              Whether you're looking for the latest blockbusters or classic
              films, PS Movies provides a seamless and enjoyable viewing
              experience. Join us and explore the world of cinema from the
              comfort of your home. Enjoy personalized recommendations and stay
              updated with the latest releases.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full p-4 bg-opacity-80">
          <MovieCurousle
            movie={movie}
            movies={movies}
            loading={loading}
            error={error}
            fetchMovies={fetchMovies}
            fetchMovieById={fetchMovieById}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
