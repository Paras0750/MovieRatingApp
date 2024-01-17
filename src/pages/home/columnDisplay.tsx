import { Paginate } from "@/components/paginate";
import { DisplayType } from "./Home";
import { Link } from "react-router-dom";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  relase_date: string;
}

interface Props {
  data: {
    page: number;
    results: DisplayData[];
    total_pages: number;
    total_results: number;
  };
  displayType: DisplayType;
}


export const ColumnDisplay = (props: Props) => {

  return (
    <>
      <div className="grid md:grid-cols-3 gap-x-5 gap-y-10">
        {props.data.results.map((item) => {
          const title = props.displayType === DisplayType.Movies ? item.title : item.name;
          return (
            <Link to={`${props.displayType === DisplayType.Movies ? `/movie/${item.id}` : `/tvshow/>${item.id}`}`} key={item.id}>
              <div className="flex flex-col border p-4 rounded-xl hover:scale-110 transition ease-in-out">
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  className="h-[450px]"
                />
                <div className="font-bold text-center text-2xl py-5">
                  {title}
                </div>
                <div className="max-h-[150px] overflow-auto">
                  <strong>Overview: </strong> {item.overview}
                </div>
                <div className="pt-6">
                  <strong>Vote Avarage: </strong> {item.vote_average}
                </div>
                <div>{item.relase_date}</div>
              </div>
            </Link>
          );
        })}

      </div>
      <div className="my-12">
        <Paginate />
      </div>
    </>
  )
}

