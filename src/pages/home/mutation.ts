export const rateMovie = async (movieId: number, rating: number) => {
  const res = fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${localStorage.getItem(
      "guest_session_id"
    )}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
      body: `{"value": ${rating}}`,
    }
  );

  const data = (await res).json();
  return data;
};

export const rateTvShow = async (rateTvShowId: number, rating: number) => {
  const res = fetch(
    `https://api.themoviedb.org/3/movie/${rateTvShowId}/rating?guest_session_id=${localStorage.getItem(
      "guest_session_id"
    )}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
      body: `{"value": ${rating}}`,
    }
  );
  const data = (await res).json();
  return data;
};
