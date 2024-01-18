import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ColumnDisplay } from "./columnDisplay.tsx";
import { fetchMovies, fetchTvShows } from "./query.ts";
import { useQuery } from "@tanstack/react-query";
import { Paginate } from "./paginate.tsx";

export enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows",
}

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  const { data: movieData, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["movies", currentPage],
    queryFn: () => fetchMovies(currentPage),
  });
  const { data: tvShowData, isLoading: isLoadingTvShows } = useQuery({
    queryKey: ["tvshows", currentPage],
    queryFn: () => fetchTvShows(currentPage),
  });

  const pageChange = (page: number) => {
    setCurrentPage(page);
    console.log("current page", page);
  };
  console.log("ENV: ", import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN);
  return (
    <div className="mt-10 h-auto">
      <div className="text-center">
        <Button
          size="lg"
          className={`${
            displayType === DisplayType.Movies
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          } rounded-r-none hover:bg-blue-500`}
          onClick={() => setDisplayType(DisplayType.Movies)}
        >
          Movies
        </Button>
        <Button
          size="lg"
          className={`${
            displayType === DisplayType.TvShows
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          } rounded-l-none hover:bg-blue-500`}
          onClick={() => setDisplayType(DisplayType.TvShows)}
        >
          TV Shows
        </Button>
      </div>

      <div className="my-12">
        <Paginate currentPage={currentPage} changePage={pageChange} />
      </div>

      {isLoadingMovies || isLoadingTvShows ? (
        <div className="mt-40 text-5xl font-bold text-center">Loading...</div>
      ) : (
        <>
          <div className="mt-20">
            {displayType === DisplayType.Movies ? (
              <ColumnDisplay
                data={movieData}
                displayType={DisplayType.Movies}
              />
            ) : (
              <ColumnDisplay
                data={tvShowData}
                displayType={DisplayType.TvShows}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
