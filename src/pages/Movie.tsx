import { Link, useParams } from "react-router-dom";
import { useMovies } from "../api/api";
import { useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { MovieCurousle } from "../components";

const Movie = () => {
  const { id } = useParams<string>();

  const { movie, fetchMovieById, loading, movies } = useMovies();

  useEffect(() => {
    fetchMovieById(id);
  }, [id]);

  if (loading) {
    return (
      <h1 className="text-white font-semibold text-3xl text-center px-5 py-12">
        Loading....
      </h1>
    );
  }

  return (
    <>
      <section className="text-gray-300 body-font overflow-hidden">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/3 w-full lg:h-auto h-80 object-cover object-top rounded"
              src={movie?.image.original}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-400 tracking-widest">
                {movie?.genres.join(", ")}
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-1">
                {movie?.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-300 ml-3">
                    {movie?.rating.average}
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-600 space-x-2s">
                  {movie?.language}
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-600 space-x-2s">
                  {movie?.status}
                </span>
              </div>
              <div
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: movie?.summary }}
              />
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Rate</span>
                  <button className="w-6 h-6 focus:outline-none">⭐</button>
                  <button className="w-6 h-6 focus:outline-none">⭐</button>
                  <button className="w-6 h-6 focus:outline-none">⭐</button>
                  <button className="w-6 h-6 focus:outline-none">⭐</button>
                  <button className="w-6 h-6 focus:outline-none">⭐</button>
                </div>
              </div>
              <div className="flex items-center">
                <span className="title-font font-medium text-sm text-gray-600">
                  {movie?.premiered} to {movie?.ended ? movie.ended : "Ended"}
                </span>
                <Link
                  to={movie?.url}
                  target="_blank"
                  className="flex ml-auto text-white rounded-full bg-indigo-500 border-0 p-3 focus:outline-none hover:bg-indigo-600"
                >
                  <FaPlay />
                </Link>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MovieCurousle movies={movies.slice(0, 15)} />
      <MovieCurousle movies={movies.slice(15, 30)} />
    </>
  );
};

export default Movie;
