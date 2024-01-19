import { Button } from "@/components/ui/button";
import { DisplayType } from "../home/Home";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchRatedMovies, fetchRatedTvShow } from "./query";
import Card from "@/components/card";

const Rated = () => {
  const [activeTab, setActiveTab] = useState<DisplayType>(DisplayType.Movies);

  const { data: movieData, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["ratedMovies"],
    queryFn: fetchRatedMovies,
  });

  const { data: tvShowData, isLoading: isLoadingTvShows } = useQuery({
    queryKey: ["ratedTvShows"],
    queryFn: fetchRatedTvShow,
  });

  console.log("movie data", movieData?.results);
  console.log("tvshow data", tvShowData?.results);
  return (
    <div className="mt-10 h-auto">
      <div className="text-center">
        <Button
          size="lg"
          className={`${
            activeTab === DisplayType.Movies
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          } rounded-r-none hover:bg-blue-500`}
          onClick={() => setActiveTab(DisplayType.Movies)}
        >
          Movies
        </Button>
        <Button
          size="lg"
          className={`${
            activeTab === DisplayType.TvShows
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          } rounded-l-none hover:bg-blue-500`}
          onClick={() => setActiveTab(DisplayType.TvShows)}
        >
          TV Shows
        </Button>
      </div>  

      {isLoadingMovies && <p>Loading rated movies...</p>}
      {isLoadingTvShows && <p>Loading rated TV shows...</p>}

      {movieData?.error && (
        <p>Error loading rated movies: {movieData.error.message}</p>
      )}
      {tvShowData?.error && (
        <p>Error loading rated TV shows: {tvShowData.error.message}</p>
      )}

      {activeTab === DisplayType.Movies ? (
        <div>
          Rated Movies
          {movieData?.results?.map((item, i) => (
            <span key={i}>
              <Card item={item} />
            </span>
          ))}
        </div>
      ) : (
        <div>
          Rated TV Shows
          {tvShowData?.results?.map((item, i) => (
            <div key={i}>
              <Card item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rated;
