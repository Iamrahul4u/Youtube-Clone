import convertISO8601ToReadable from "../../utils/services";

function SuggestionVideoCard({ video }) {
  return (
    <div className='w-full flex gap-2 p-2 flex-row'>
      <div className='relative w-40'>
        <a href='#'>
          <img
            src={video.snippet.thumbnails.medium.url}
            className='w-32 h-20 object-cover   rounded-lg'
          />
        </a>
      </div>

      <div className='flex flex-row  gap-2'>
        <div className='flex flex-col'>
          <a href='#'>
            <p className='text-black-100 text-sm font-semibold'>
              {video.snippet.title.slice(0, 50)}
            </p>
          </a>
          <a className='text-gray-400 text-xs hover:text-gray-100' href='#'>
            {video.snippet.channelTitle}
          </a>
          <p className='text-gray-400 text-xs '>
            {Math.floor(video.statistics.viewCount / 1000)}K views
          </p>
        </div>
      </div>
    </div>
  );
}

export default SuggestionVideoCard;
