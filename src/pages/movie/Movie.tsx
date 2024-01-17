import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "./query";

const Movie = () => {
  const { id } = useParams<string>();

  const { data, isLoading } = useQuery({
    queryKey: ["movie"],
    queryFn: () => fetchMovieDetails(id),
  });

  
  return (
    <div className="mt-[50px]">
      {isLoading ? (
        <div className="mt-[50px]">Loading...</div>
      ) : (
        <div>
          <>
            <img
              className="h-[450px]"
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt=""
            />
            <h2 className="text-4xl font-bold">{data.title}</h2>
          </>
        </div>
      )}
    </div>
  );
};

export default Movie;
