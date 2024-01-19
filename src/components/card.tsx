import { DisplayData } from "./columnDisplay";

interface Props {
  item: DisplayData;
}
const Card = ({ item }: Props) => {
  return (
    <div>
      {item ? <div className="flex flex-col border p-4 rounded-xl ">
        <div className="flex justify-center">
          <img
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            className="w-[350px] text-center"
          />
        </div>

        <div className="font-bold text-center text-2xl py-5">{item.title}</div>
        <div className="max-h-[150px] overflow-auto">
          <strong>Overview: </strong> {item.overview}
        </div>
        <div className="pt-6">
          <strong>Vote Avarage: </strong> {item.vote_average}
        </div>
        <div>{item.relase_date}</div>
      </div>: <>No Data</>}
    </div>
  );
};

export default Card;
