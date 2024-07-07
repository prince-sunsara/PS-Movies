import { Link } from "react-router-dom";
import { useMovies } from "../api/api";
import { Pagination } from "../components";
import { useState } from "react";

const Gallary = () => {
  const { movies, loading } = useMovies();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState(20);
  const indexOfLastPost = page * posts;
  const indexOfFirstPost = indexOfLastPost - posts;

  const handlePagination = (pageNumber: number) => {
    setPage(pageNumber);
  };
  // console.log(page);

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
              movies.slice(indexOfFirstPost, indexOfLastPost).map((movie) => (
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

      {/* pagination  */}
      <Pagination
        posts={posts}
        length={movies.length}
        handlePagination={handlePagination}
        currentPage={page}
      />
    </>
  );
};

export default Gallary;
