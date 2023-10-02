import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface IUser {
  id: number;
  email: string;
  name: string;
}

interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  authenticated: boolean,
}
export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
  authenticated: false,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  
  useEffect(() => {
    const fetchApi = async () => {
      try {
        if (!user) {
          const response = await axios.get("http://localhost:3000/verify", {
            withCredentials: true,
          });
          setUser(response.data);
          setAuthenticated(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser , authenticated}}>
      {children}
    </UserContext.Provider>
  );
};
