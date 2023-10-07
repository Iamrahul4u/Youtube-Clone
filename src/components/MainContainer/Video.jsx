import styles from "../../styles/Video.module.css";
function Video({ video }) {
  // video=video.video
  return (
    <>
      <div
        className={`${styles.card} md:w-[360] h-full justify-between -z-50 w-full`}
      >
        <div>
          <img
            src={video.snippet.thumbnails.standard.url}
            alt=''
            // className={styles.image}
          />
        </div>
        <div className='flex flex-col justify-between w-full'>
          <div className={`${styles.content} w-full`}>
            <h4>{video.snippet.title.slice(0, 60)}...</h4>
          </div>
          <div className={`${styles.content}  `}>
            <h4>{video.snippet.channelTitle}</h4>
            <h4>{(video.statistics.viewCount / 1000).toFixed(1)}k views</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
