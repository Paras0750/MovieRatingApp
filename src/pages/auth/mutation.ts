export const mutationLogin = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${
        import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN
      }`,
    },
  };

  const res = fetch(
    "https://api.themoviedb.org/3/authentication/guest_session/new",
    options
  );
  const data = (await res).json();
  return data;
};
