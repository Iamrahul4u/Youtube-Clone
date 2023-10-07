function SearchList({ video }) {
  return (
    <div className='w-full '>
      <div className=' flex mx-auto p-2  flex-row'>
        <div className='mx-20 '>
          <a href='#'>
            <img
              src={video.snippet.thumbnails.medium.url}
              className='w-[250] h-[200px] object-center rounded-lg'
            />
          </a>
        </div>

        <div className='flex flex-row  gap-2'>
          <div className='flex flex-col mt-8 -ml-10'>
            <a href='#'>
              <p className='text-black-100 text-sm font-semibold'>
                {video.snippet.title.slice(0, 50)}
              </p>
            </a>
            <a className='text-gray-400 text-xs hover:text-gray-100' href='#'>
              {video.snippet.channelTitle}
            </a>
            <p className='text-gray-400 text-xs '>
              {/* {Math.floor(video.statistics.viewCount / 1000)}K views */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchList;
