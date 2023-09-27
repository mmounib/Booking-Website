import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <section className="w-[35%] max-sm:mt-8 flex flex-col justify-start mt-56 mx-auto h-screen">
      <h1 className="text-center text-2xl font-semibold">Login</h1>
      <div className="mt-4 border-[1px] border-gray-400 shadow-md shadow-gray-400 rounded-[10px]">
        <form className="flex flex-col gap-4 py-8 h-[350px] max-sm:h-[250px] max-sm:py-6">
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" className="mt-4" />
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
        <span className=" pl-2 text-lg font-bold"><Link to="/register">Register Now </Link></span>
      </div>
    </section>
  );
};

export default LoginPage;
