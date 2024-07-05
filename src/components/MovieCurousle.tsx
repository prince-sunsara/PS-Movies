import { Link } from "react-router-dom";
import { MovieContextType } from "../api/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function MovieCurousle({ movies }: MovieContextType) {
  return (
    <div className="relative">
      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        className="container w-full py-12"
      >
        <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 p-2 bg-gray-800 bg-opacity-75 rounded-full hover:bg-gray-700 transition duration-300" />
        <CarouselContent>
          {movies &&
            movies.map((movie, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-2"
              >
                <Link to={`/gallery/${movie.id}`}>
                  <div className="bg-cardBackground p-4 text-center rounded-lg shadow-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-2"
                      src={movie.image.original}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-gray-500 text-xs font-medium title-font">
                      {movie.genres.join(", ")}
                    </h3>
                    <h2 className="text-lg text-gray-100 font-medium title-font mb-2">
                      {movie.name}
                    </h2>
                  </div>
                </Link>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 p-2 bg-gray-800 bg-opacity-75 rounded-full hover:bg-gray-700 transition duration-300" />
      </Carousel>
    </div>
  );
}

export default MovieCurousle;
