import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ColumnDisplay } from "./columnDisplay.tsx";
import { fetchMovies, fetchTvShows } from "./query.ts";
import { useQuery } from "@tanstack/react-query";

export enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows",
}

const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.Movies);

  const { data: movieData, isLoading: isLoadingMovies } = useQuery({ queryKey: ["movies"], queryFn: fetchMovies });
  const { data: tvShowData, isLoading: isLoadingTvShows } = useQuery({ queryKey: ["tvshows"], queryFn: fetchTvShows });
  return (
    <div className="mt-10 h-auto">
      <div className="text-center">
        <Button
          size="lg"
          className={`${displayType === DisplayType.Movies ? "bg-blue-500 text-white" : "bg-gray-300"} rounded-r-none hover:bg-blue-500`}
          onClick={() => setDisplayType(DisplayType.Movies)}
        >
          Movies
        </Button>
        <Button
          size="lg"
          className={`${displayType === DisplayType.TvShows ? "bg-blue-500 text-white" : "bg-gray-300"} rounded-l-none hover:bg-blue-500`}
          onClick={() => setDisplayType(DisplayType.TvShows)}
        >
          TV Shows
        </Button>
      </div>

      {
        isLoadingMovies || isLoadingTvShows ? (
          <div className="mt-32">Loading...</div>
        ) : (
          <div className="mt-20">
            {
              displayType === DisplayType.Movies ?
                (<ColumnDisplay data={movieData} displayType={DisplayType.Movies} />) :
                (<ColumnDisplay data={tvShowData} displayType={DisplayType.TvShows} />)
            }
          </div >
        )
      }

    </div >
  );
};

export default Home;

