import SuggestionVideoCard from "../WatchPage/SuggestionVideoCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchList from "./SearchList";
import { getSearchVideos } from "../../store/VideoSlice";
function SearchResults() {
  const videos = useSelector((state) => state.videos.search.items);
  console.log(videos);

  return (
    <div className=' container flex fixed  overflow-y-scroll flex-col h-[100%]  gap-2 mb-10 p-2'>
      {videos.slice(1, 19).map((video) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id.videoId}>
            <SearchList key={video.id.videoId} video={video} />
          </Link>
        );
      })}
    </div>
  );
}

export default SearchResults;
