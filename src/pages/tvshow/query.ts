const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`,
  },
};

export const fetchTvDetails = async (tvId: string) => {
  const res = fetch(
    `https://api.themoviedb.org/3/tv/${tvId}`,
    options
  );
  const data = (await res).json();
  return data;
};
