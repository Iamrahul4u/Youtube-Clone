import { useSearchParams } from "react-router-dom";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
function VideoPlayerCard() {
  let [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  return (
    <div className='ml-12'>
      <iframe
        width='800'
        height='400'
        src={`https://www.youtube-nocookie.com/embed/${videoId}?si=wFS4gtEzsU_PqI_o`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write;   picture-in-picture; web-share'
        allowFullScreen
        className='rounded-lg'
      ></iframe>
      <h1 className='text-2xl font-semibold'>
        Build a Complete SaaS Platform with Next.js 13, React, Prisma, tRPC,
        Tailwind | Full Course 2023
      </h1>
      <div className='flex gap-2 mt-2 justify-between   '>
        <div className='flex'>
          <p className='bg-gray-400 h-12 w-12 rounded-full'></p>
          <div className='flex flex-col'>
            <p>Channel Name</p>
            <p>Subscribe Count</p>
          </div>
        </div>
        <div className='flex'>
          <button className='w-20 flex bg-gray-200  text-center p-2 rounded-l-lg -mr-2 border-r-2 border-gray-500'>
            <AiOutlineLike className='mx-auto my-auto' />
            <p className='mx-auto my-auto'>Likes</p>
          </button>
          <button className='w-10 flex bg-gray-200  text-center p-2 rounded-r-lg'>
            <AiOutlineDislike className='mx-auto my-auto' />
          </button>
        </div>
      </div>
    </div>
  );
}
export default VideoPlayerCard;
