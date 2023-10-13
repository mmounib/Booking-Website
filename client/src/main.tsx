import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import { Bookings, LoginPage, Profile, RegisterPage } from "./exports.ts";
import { UserProvider } from "./ContextProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/account/:subpage?",
        element: <Profile />,
        // children: [
        //     {
        //         path: "/account/:subpage",
        //         element: <Profile />
        //     }
        // ]
        // children: [
        //     {
        //         path: "Bookings",
        //         element: <Profile />,
        //     },
        //     {
        //         path: "Places",
        //         element: <Profile />,
        //     },
        // ]
      },
      {
        path: "/account/:subpage/:action",
        element: <Profile />
      }
      // {
      //     path: "/account/Bookings",
      //     element: <Bookings/>,
      // }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </>
);
