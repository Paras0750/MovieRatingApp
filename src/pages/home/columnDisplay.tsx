import { DisplayType } from "./Home";
import { Card } from "./card";

export interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  relase_date: string;
}

interface Props {
  data?: {
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
        {props.data &&
          props.data.results.map((item, i) => {
            const title =
              props.displayType === DisplayType.Movies ? item.title : item.name;
            return (
              <Card
                key={i}
                displayType={props.displayType}
                title={title}
                item={item}
              />
            );
          })}
      </div>
    </>
  );
};
