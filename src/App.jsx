import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import Sidebar from "./components/Sidebar";
import { useDispatch } from "react-redux";
import { getVideos } from "./store/VideoSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(getVideos());
  return (
    <>
      <div className='overflow-hidden'>
        <Sidebar className='z-50' />
        <Header />
        <Outlet />
      </div>
    </>
  );
}
export default App;
