import React from "react";
import { FaPlay, FaPlus } from "react-icons/fa";
import { useMovies } from "../api/api";
import { MovieCurousle } from "../components";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { movies } = useMovies();

  return (
    <div className="relative h-screen bg-black text-white">
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.redd.it/76u7q5kqua951.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90">
          <div className="absolute top-10 left-10 z-10 max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl">
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
                to="/gallery"
                className="flex items-center justify-center bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition duration-300 w-full sm:w-auto"
              >
                <FaPlay className="mr-2" /> Gallery
              </Link>
              <button className="flex items-center justify-center bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition duration-300 w-full sm:w-auto">
                <FaPlus className="mr-2" /> Contact Us
              </button>
            </div>
            <p className="text-sm md:text-base max-w-md">
              Sed ut perspiciatis unde omnis iste natus accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full p-4 bg-opacity-80">
          <MovieCurousle movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default Home;