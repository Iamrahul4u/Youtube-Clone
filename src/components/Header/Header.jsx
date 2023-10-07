import SearchBar from "./SearchBar";
import { BiSolidUserCircle } from "react-icons/bi";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <div className='px-4 py-2  flex flex-row bg-fixed z-50 justify-between gap-10 align-middle my-auto'>
      <div className='mt-2 ml-1'>
        <Hamburger />
      </div>
      <SearchBar />
      <BiSolidUserCircle className='h-10 w-10 ' />
    </div>
  );
};

export default Header;
