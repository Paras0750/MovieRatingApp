const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`,
  },
};

export const fetchMovies = async (page: number) => {
  const res = fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
    options
  );
  const data = (await res).json();
  return data;
};

export const fetchTvShows = async (page: number) => {
  const res = fetch(
    `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`,
    options
  );
  const data = (await res).json();
  return data;
};
