const FILTER_PARAMETRS = ["Search","Genre", "Season", "Year", "Airing Status"]
import FilterBar from "./filterBar";
export default function Filter() {
  return (
    <div className="flex justify-between xl:w-[80%] w-[95%] sm:w-[90%] text-zinc-100 mb-20">
        {FILTER_PARAMETRS.map(filter => <FilterBar key={filter} text={filter} />)}
    </div>
  );
}
