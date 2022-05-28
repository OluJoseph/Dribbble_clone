import Svg from "../Svg/Svg";
import { search } from "../svgDimensions";

const Search = ({ placeholder }) => {
  return (
    <div className=" flex items-center gap-1 rounded-lg bg-zinc-100 w-full p-2 px-3">
      <Svg
        width={"16"}
        viewBox={"0 0 16 16"}
        color={"#b5b5b5"}
        drawingPath={search.paths}
      />
      <input type="text" className="bg-transparent" placeholder={placeholder} />
    </div>
  );
};

export default Search;
