import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DisplayType } from "./Home";

import { useMutation } from "@tanstack/react-query";
import { rateMovie, rateTvShow } from "./mutation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "@/components/card";
import { DisplayData } from "@/components/columnDisplay";

interface Props {
  displayType: DisplayType;
  item: DisplayData;
  title?: string;
}

export const CardComponent = ({ displayType, item }: Props) => {
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
        <Card item={item} />
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
