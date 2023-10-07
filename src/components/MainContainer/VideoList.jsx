import { useEffect, useState } from "react";
import { fetchData } from "../../utils/apiServices";
import Video from "./Video";
import axios from "axios";
import VideoShimmer from "./VideoShimmer";
import { Link } from "react-router-dom";
import { getVideos } from "../../store/VideoSlice";
import { useDispatch, useSelector } from "react-redux";

function VideoList() {
  const videos = useSelector((state) => state.videos.videos.items);
  const arr = Array.from({ length: 10 }, (_, k) => k + 1);
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 mt-5 gap-5 px-10'>
        {!videos &&
          arr.map((item) => {
            return <VideoShimmer key={item} />;
          })}
        {videos &&
          videos.map((video) => {
            return (
              <Link key={video.id} to={"/watch?v=" + video.id}>
                <Video video={video} />
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default VideoList;
