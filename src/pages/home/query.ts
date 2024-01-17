const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`,
  },
};

export const fetchMovies = async () => {
  const res = fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );
  const data = (await res).json();
  console.log("Data: ", await data);
  return data;
};


export const fetchTvShows = async () => {
  const res = fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    options
  );
  const data = (await res).json();
  console.log("TV Data: ", await data);
  return data;
};


