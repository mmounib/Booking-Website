import {useContext} from "react";
import {UserContext} from "../../ContextProvider";
import {Navigate} from "react-router-dom";

const Profile = () => {
    const {user, authenticated} = useContext(UserContext);

    if (!authenticated) return <Navigate to={"/login"}/>;

    return (
        <section>
            <h1>Hello {user?.name}!</h1>
        </section>
    );
};

export default Profile;
