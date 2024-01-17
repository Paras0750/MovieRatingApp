const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`,
  },
};

export const fetchMovieDetails = async (movieId: string) => {
  const res = fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&page=1`,
    options
  );
  const data = (await res).json();
  console.log("Data2: ", await data);
  return data;
};
