import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchTvDetails } from "./query";
import { Button } from "@/components/ui/button";

const Tvshow = () => {
  const { id } = useParams<string>();
  if (!id) return <div>Tvshow not found</div>;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading } = useQuery({
    queryKey: ["movie"],
    queryFn: () => fetchTvDetails(id),
  });

  return (
    <div className="mt-[50px]">
      {isLoading ? (
        <div className="mt-[50px]">Loading...</div>
      ) : (
        <div className="flex gap-10">
          <>
            <img
              className="h-[450px] border rounded-md"
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt=""
            />
            <div>
              <h2 className="text-4xl font-bold">{data.name}</h2>
              <div className="mt-5 flex flex-col gap-y-4">
                <div>
                  <span className="font-bold">Overview: </span>
                  <div>{data.overview}</div>
                </div>
                <span className="font-bold">
                  Genres:
                  {data.genres.map((item: { id: number; name: string }) => (
                    <div key={item.id} className="ml-5">
                      {item.name}
                    </div>
                  ))}
                </span>
                <span className="font-bold">
                  Number Of Seasons: {data.number_of_seasons}
                </span>
                <span className="font-bold">
                  Number Of Episodes: {data.number_of_episodes}
                </span>
                <span>
                  <div className="font-bold mb-4">Producers:</div>
                  <div className="grid grid-cols-3 gap-y-5 justify-self">
                    {data.production_companies.map(
                      (cont: {
                        id: number;
                        logo_path: string | null;
                        name: string;
                        origin_country: string;
                      }) => (
                        <div className="flex items-center gap-2" key={cont.id}>
                          <img
                            className="object-contain h-[50px] w-[50px] rounded-full"
                            src={`https://image.tmdb.org/t/p/original${cont.logo_path}`}
                          />
                          {cont.name}
                        </div>
                      )
                    )}
                  </div>
                </span>
                <span className="font-bold">Runtime: {data.runtime} mins</span>
                <span className="font-bold">
                  Vote Average: {data.vote_average} / 10
                </span>
                <span className="font-bold">
                  Language: {data.original_language}
                </span>

                <Button
                  onClick={() => {
                    window.open(`${data.homepage}`, "_blank");
                  }}
                >
                  Watch Now
                </Button>
              </div>
            </div>
          </>
        </div>
      )}
    </div>
  );
};

export default Tvshow;
