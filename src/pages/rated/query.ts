const options = {
  method: "GET",
};

export const fetchRatedMovies = async () => {
  const res = fetch(
    `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest_session_id"
    )}/rated/movies?language=en-US&sort_by=created_at.asc&api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }`,
    options
  );
  const data = (await res).json();
  return data;
};

export const fetchRatedTvShow = async () => {
  const res = fetch(
    `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest_session_id"
    )}/rated/tv?language=en-US&sort_by=created_at.asc&api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }`,
    options
  );
  const data = (await res).json();
  return data;
};
