import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SuggestionVideoCard from "./SuggestionVideoCard";

function Suggestions() {
  const videos = useSelector((state) => state.videos.videos.items);
  return (
    <div className=' container flex flex-col gap-2 mb-10 p-2'>
      {videos.slice(1, 19).map((video) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <SuggestionVideoCard key={video.id} video={video} />
          </Link>
        );
      })}
    </div>
  );
}
export default Suggestions;
