import { useContext } from "react";
import { UserContext } from "../../ContextProvider";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Places } from "../../exports";
import {AiFillHome} from 'react-icons/ai'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {MdOutlineAccountBox} from 'react-icons/md'

const Profile = () => {
  const { user, authenticated, setUser } = useContext(UserContext);
  let { subpage } = useParams();
  const navigate = useNavigate();

  if (subpage === undefined) subpage = "profile";

  const handleLogOut = async () => {
    await axios.post("http://localhost:3000/logout");
    navigate("/");
    setUser(null);
  };

  if (authenticated && !user) return <Navigate to={"/login"} />;

  return (
    <section className="mt-24 w-full">
      <div className="flex justify-center gap-36 items-center">
        <NavLink to="/account" className="text-xl flex items-center gap-6 text-white font-medium">
          <MdOutlineAccountBox size={30}/>
          My Profile
        </NavLink>
        <NavLink to="/account/Bookings" className="text-xl bg-gray-300 flex items-center gap-6 rounded-[50px] py-4 px-8 font-medium">
          <BsFillBookmarkFill size={30}/>
          Bookings
        </NavLink>
        <NavLink to="/account/Places" className="text-xl font-medium flex gap-6 items-center">
          <AiFillHome size={30}/>
          Accommodations
        </NavLink>
      </div>
      {subpage == "profile" && (
        <div className="flex max-w-[50%] mx-auto flex-col mt-8 max-sm:mt-4 gap-4">
          <span className="text-center text-xl font-medium">
            You Are Logged in as{" "}
            <span className="font-extrabold text-2xl">
              {user?.name} ({user?.email})
            </span>{" "}
          </span>
          <button
            className=" bg-primary text-white rounded-[10px] py-3 px-5"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div>
      )}
      {subpage === "Places" && <Places />}
    </section>
  );
};

export default Profile;
