import { useDispatch, useSelector } from "react-redux";
import { getFilterVideos, getSearchVideos } from "../../store/VideoSlice";

const arr = [
  "All",
  "Gaming",
  "Music",
  "Mixes",
  "JavaScript",
  "Computers",
  "Live",
  "Film Critisms",
  "BollyWood Music",
  "ShahRukh Khan",
  "Functions",
  "Movie Musicals",
  "Lectures",
  "Sales",
];

function FilterList() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.videos);
  function handleFilter(item) {
    dispatch(getFilterVideos(item));
    console.log(filter);
    console.log(item);
  }
  return (
    <div className='container ml-10 -mr-10 flex w-[90%] gap-3 overflow-x-scroll whitespace-nowrap'>
      {arr.map((item) => (
        <button
          key={item}
          onClick={() => handleFilter(item)}
          className={`${
            filter === item ? "bg-black text-white" : ""
          } bg-gray-100  rounded-lg px-2 py-1`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default FilterList;
