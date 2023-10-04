import {useContext} from "react";
import {UserContext} from "../../ContextProvider";
import {Navigate, NavLink} from "react-router-dom";

const Profile = () => {
    const {user, authenticated} = useContext(UserContext);

    if (authenticated && !user) return <Navigate to={"/login"}/>;

    return (
        <section className="mt-24 w-full">
            <div className="flex justify-center gap-36 items-center">
                <NavLink to="/account" className="text-xl text-white font-medium">My Profile</NavLink>
                <NavLink to="/account/Bookings" className="text-xl text-black font-medium">Bookings</NavLink>
                <NavLink to="/account/Places" className="text-xl text-black font-medium">Accommodations</NavLink>
            </div>
        </section>
    );
};

export default Profile;
