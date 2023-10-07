import styles from "../../styles/Video.module.css";

function VideoShimmer() {
  return (
    <div className={`${styles.card} md:w-[372] w-full`}>
      <div className={[styles.loading]}>
        <img className={styles.image} />

        <div className='flex'>
          <div className={`${styles.circle} m-1  bg-gray-200`}></div>
          <div className='flex flex-col w-full'>
            <div className={`${styles.content} w-full`}>
              <h4></h4>
            </div>
            <div className={`${styles.content} w-52`}>
              <h4></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoShimmer;
