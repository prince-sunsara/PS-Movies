interface Schedule {
  time: string;
  days: string[];
}

interface Rating {
  average: number;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

interface Image {
  medium: string;
  original: string;
}

interface Links {
  self: {
    href: string;
  };
  previousepisode: {
    href: string;
    name: string;
  };
}

export interface Movie {
  id: string;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: null;
  dvdCountry: null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

export interface MovieContextType {
  movies: Movie[];
  fetchMovies: () => void;
  fetchMovieById: (id: string) => void;
  loading: boolean;
  error: string | null;
  movie: Movie | null;
}
