import { useParams, useSearchParams } from "react-router-dom";
import VideoPlayerCard from "./VideoPlayerCard";
import Suggestions from "./Suggestions";

function WatchPage() {
  return (
    <div className='flex fixed  overflow-y-scroll h-[85%] scroll-pb-10 gap-4'>
      <VideoPlayerCard />
      <Suggestions />
    </div>
  );
}

export default WatchPage;
