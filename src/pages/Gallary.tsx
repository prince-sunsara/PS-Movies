import { Link } from "react-router-dom";
import { useMovies } from "../api/api";

const Gallary = () => {
  const { movies, loading } = useMovies();

  if (loading) {
    return (
      <h1 className="text-white font-semibold text-3xl text-center px-5 py-12">
        Loading....
      </h1>
    );
  }

  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container px-4 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {movies &&
              movies.map((movie) => (
                <Link
                  to={`/gallary/${movie.id}`}
                  className="lg:w-1/5 md:w-1/3 p-4 w-full hover:shadow-gray-200 hover:shadow-sm hover:scale-105"
                  key={movie.id}
                >
                  <div>
                    <img
                      alt={movie.name}
                      className="object-cover object-center w-full h-full block"
                      src={movie.image.medium}
                    />
                    <div className="mt-4">
                      <h3 className="text-gray-400 text-xs tracking-widest title-font mb-1">
                        {movie.genres.join(", ")}
                      </h3>
                      <h2 className="text-gray-300 title-font text-lg font-medium">
                        {movie.name}
                      </h2>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallary;
