import { GrHomeRounded, GrChannel } from "react-icons/gr";
import { SiShortcut } from "react-icons/si";
import Hamburger from "./Header/Hamburger";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
function Sidebar() {
  const state = useSelector((state) => state.menu.menu);

  if (!state) {
    return;
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='flex flex-col absolute w-60  h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l '
      >
        <div className='-mt-4 '>
          <Hamburger className='z-50' />
        </div>

        <div className='flex flex-col justify-between flex-1 mt-6'>
          <nav className='-mx-3 space-y-6 '>
            <div className='space-y-3 '>
              <label className='px-3 text-xs text-black uppercase '>
                analytics
              </label>

              <a
                className='flex items-center px-3 py-3 text-yello-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  hover:text-gray-700'
                href='#'
              >
                <GrHomeRounded className='h-4 w-auto' />

                <span className='mx-2 text-sm font-medium'>Home</span>
              </a>

              <a
                className='flex items-center px-3 py-3 text-yello-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  hover:text-gray-700'
                href='#'
              >
                <SiShortcut className='h-4 w-auto' />

                <span className='mx-2 text-sm font-medium'>Short</span>
              </a>

              <a
                className='flex items-center px-3 py-3 text-yello-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  hover:text-gray-700'
                href='#'
              >
                <GrChannel className='h-4 w-auto' />

                <span className='mx-2 text-sm font-medium'>Channel</span>
              </a>
            </div>
          </nav>
        </div>
      </motion.div>
    </>
  );
}

export default Sidebar;
