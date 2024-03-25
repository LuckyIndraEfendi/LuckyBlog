import { LuMenu } from "react-icons/lu";
import { ModeToggle } from "./DarkModeToogle";

const Navbar = () => {
  return (
    <nav className="ring-1 ring-gray-300 dark:ring-gray-500 dark:ring-[.5px] fixed w-full top-0 z-10  bg-background">
      <header className="py-4  w-[90%] sm:w-[95%] m-auto flex items-center justify-between">
        <div className="logo">
          <h1 className="text-2xl font-sans font-bold">LuckyBlog</h1>
        </div>
        <ul className="sm:flex sm:items-center hidden sm:w-1/2 lg:w-1/3 sm:justify-around">
          <li className="text-gray-800 font-medium dark:text-white">Home</li>
          <li className="text-gray-800 font-medium dark:text-white">About</li>
          <li className="text-gray-800 font-medium dark:text-white">
            Our Story
          </li>
          <li className="text-gray-800 font-medium dark:text-white">Tags</li>
          <li>
            <ModeToggle />
          </li>
        </ul>
        <LuMenu className="text-3xl hover:cursor-pointer sm:hidden" />
      </header>
    </nav>
  );
};

export default Navbar;
