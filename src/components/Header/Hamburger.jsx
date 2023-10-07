import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setMenu } from "../../store/MenuSlice";

function Hamburger() {
  const dispatch = useDispatch();
  function handleMenuToggle() {
    dispatch(setMenu());
  }
  return (
    <div className='flex gap-4 '>
      <RxHamburgerMenu
        className='h-6 w-auto my-auto z-50'
        onClick={() => handleMenuToggle()}
      />
      <a href='/'>
        <img
          className='h-5 mt-[0.5px] my-auto'
          src='https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png'
          alt=''
        />
      </a>
    </div>
  );
}

export default Hamburger;
