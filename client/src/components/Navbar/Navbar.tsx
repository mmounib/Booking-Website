import { TbBrandBooking } from "react-icons/tb";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";
import { useContext } from "react";
import { UserContext } from "../../ContextProvider";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="w-[85%] mx-auto my-8">
      <nav>
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-1 items-center bg-primary backdrop-blur-md rounded-xl py-2 px-3">
            <TbBrandBooking size={45} className="text-white" />
            <h1 className="text-white font-semibold text-xl">BookWithMe</h1>
          </div>
          <div className="flex items-center py-4 mx-auto px-3 gap-4 border-[1px] border-gray-400 shadow-md shadow-gray-300 rounded-xl">
            <ul className="flex gap-5">
              <li>
                <Link to="/">Anywhere</Link>
              </li>
              <span className="border-r-[1px] border-gray-400 h-[25px] w-[1px]"></span>
              <li>
                <Link to="/">Any week</Link>
              </li>
              <span className="border-r-[1px] border-gray-400 h-[25px] w-[1px]"></span>
              <li>
                <Link to="/" className="opacity-70">
                  Add guests
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="rounded-full bg-pink-700 text-white font-bold p-2"
            >
              <IoIosSearch size={20} />
            </button>
          </div>
          <div className="flex gap-8 items-center bg-primary rounded-xl py-3 px-7">
            <RxHamburgerMenu size={20} className="text-white cursor-pointer" />
            <div className="flex items-center gap-2 ">
              {!!user && (
                <Link to="/account" className="text-white text-base capitalize">
                  {user.name}
                </Link>
              )}
              <Link to={user ? "/account" : "/login"}>
                <VscAccount size={30} className="text-white cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
