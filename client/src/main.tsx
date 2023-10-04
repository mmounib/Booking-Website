import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import {LoginPage, Profile, RegisterPage} from "./exports.ts";
import {UserProvider} from "./ContextProvider.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/login",
                element: <LoginPage/>,
            },
            {
                path: "/register",
                element: <RegisterPage/>,
            },
            {
                path: "/account",
                element: <Profile/>,
            },
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
            <RouterProvider router={router}/>
        </UserProvider>
    </>
);
