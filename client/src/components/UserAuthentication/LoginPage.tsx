import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../ContextProvider";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const SubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/checkUser",
        userData,
        { withCredentials: true }
      );

      setUser(response.data);
      navigate("/");
    } catch (error) {
      // console.log(error)
    }
  };

  return (
    <section className="w-[35%] max-sm:mt-8 flex flex-col justify-start mt-56 mx-auto h-screen">
      <h1 className="text-center text-2xl font-semibold">Login</h1>
      <div className="mt-4 border-[1px] border-gray-400 shadow-md shadow-gray-400 rounded-[10px]">
        <form
          className="flex flex-col gap-4 py-8 h-[350px] max-sm:h-[250px] max-sm:py-6"
          onSubmit={SubmitForm}
        >
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Your Password"
            className="mt-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-primary mt-auto text-white text-lg rounded-[5px] flex items-center justify-center w-[250px] py-4 mx-auto"
          >
            Login
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center mt-4">
        <span className="text-base">Don't have an account yet ?</span>
        <span className=" pl-2 text-lg font-bold">
          <Link to="/register">Register Now </Link>
        </span>
      </div>
    </section>
  );
};

export default LoginPage;
