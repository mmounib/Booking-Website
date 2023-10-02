import axios from "axios";
import { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<JSX.Element | null>(null);

  const userData = {
    name: name,
    email: email,
    password: password,
  };

  const SubmitInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/registerUser",
        userData
      );

      setMessage(<div>Registration is Successful!</div>);

      setTimeout(() => {
        setMessage(null);
      }, 2000);
    } catch (error) {
      setMessage(<div>Registration is Failed!</div>);
    }
  };
  return (
    <section className="w-[35%] max-sm:mt-8 flex flex-col justify-start mt-56 mx-auto h-screen">
      <h1 className="text-center text-2xl font-semibold">Register</h1>
      <div className="mt-4 border-[1px] border-gray-400 shadow-md shadow-gray-400 rounded-[10px]">
        <form
          onSubmit={SubmitInfo}
          className="flex flex-col gap-4 py-8  max-sm:h-[250px] max-sm:py-6"
        >
          <input
            type="text"
            placeholder="Your FullName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="mt-4"
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
            className="bg-primary mt-14 text-white text-lg rounded-[5px] flex items-center justify-center w-[250px] py-4 mx-auto"
          >
            Register Now
          </button>
        </form>
      </div>

      {message && (
        <div className=" bg-green-700 transition duration-200 ease-in rounded-[5px] mt-6 text-center p-2 w-full text-white">
          {message}
        </div>
      )}
    </section>
  );
};

export default RegisterPage;
