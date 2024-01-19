import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DisplayType } from "./Home";
import { DisplayData } from "./columnDisplay";
import { useMutation } from "@tanstack/react-query";
import { rateMovie, rateTvShow } from "./mutation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  displayType: DisplayType;
  item: DisplayData;
  title?: string;
}

export const Card = ({ displayType, item, title }: Props) => {
  const [rating, setRating] = useState<number>(1);

  const { mutate: rateMovieMut } = useMutation({
    mutationKey: ["rateMovie"],
    mutationFn: (id: number) => rateMovie(id, rating),
    onSuccess: () => toast.success("Movie rated successfully"),
    onError: () => toast.error("Error rating movie"),
  });

  const { mutate: rateTvShowMut } = useMutation({
    mutationKey: ["rateTvShow"],
    mutationFn: (id: number) => rateTvShow(id, rating),
    onSuccess: () => toast.success("Movie rated successfully"),
    onError: () => toast.error("Error rating movie"),
  });

  const handleRating = () => {
    console.log("rating", rating);
    if (displayType === DisplayType.Movies) {
      rateMovieMut(item.id);
    } else {
      rateTvShowMut(item.id);
    }
  };

  return (
    <div className="flex flex-col hover:scale-105 transition ease-in-out">
      <Link
        to={`${
          displayType === DisplayType.Movies
            ? `/movie/${item.id}`
            : `/tvshow/${item.id}`
        }`}
        key={item.id}
      >
        <div className="flex flex-col border p-4 rounded-xl ">
          <div className="flex justify-center">
            <img
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              className="w-[350px] text-center"
            />
          </div>

          <div className="font-bold text-center text-2xl py-5">{title}</div>
          <div className="max-h-[150px] overflow-auto">
            <strong>Overview: </strong> {item.overview}
          </div>
          <div className="pt-6">
            <strong>Vote Avarage: </strong> {item.vote_average}
          </div>
          <div>{item.relase_date}</div>
        </div>
      </Link>
      <form
        className="text-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleRating();
        }}
      >
        <input
          className="border rounded-r-0 p-3 border-gray-500 rounded-md h-[2.5rem] dark:text-black"
          type="number"
          min="0.5"
          max="10"
          step="0.5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <Button
          className="bg-blue-500 text-white rounded-md border-l-0 p-2 mt-2 ml-2"
          type="submit"
        >
          &nbsp;Rate 🌟 &nbsp;
        </Button>
      </form>
    </div>
  );
};
