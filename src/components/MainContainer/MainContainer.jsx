import FilterList from "./FilterList";
import MiniSidebar from "./MiniSidebar";
import VideoList from "./VideoList";

function MainContainer() {
  return (
    <div className='flex h-full'>
      <MiniSidebar />
      <div className='flex flex-col ml-10 h-full w-full overflow-hidden'>
        <FilterList />
        <div className='h-[80%] w-[95%] -z-10 fixed overflow-scroll  mt-10 '>
          <VideoList />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
