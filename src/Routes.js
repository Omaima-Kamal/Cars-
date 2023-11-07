import { Navigate, createBrowserRouter } from "react-router-dom";
import LogIn from "./pages/login/LogIn";
import App from "./App";
import Home from "./pages/home/Home";
import ContactUs from "./pages/contactUs/ContactUs";
import SignUp from "./pages/signUp/SignUp";
import LoggedIn from "./pages/loggedIn/LoggedIn";
import ForgetPassword from "./pages/forgetPassword/ForgetPassword";
import Convertibles from "./pages/CarsInfo/convertibles/Convertibles";
import Coupes from "./pages/CarsInfo/coupes/Coupes";
import Hatchbacks from "./pages/CarsInfo/hatchbacks/Hatchbacks";
import SUVs from "./pages/CarsInfo/suv/SUVs";
import Vans from "./pages/CarsInfo/van/Vans";
import MPV from "./pages/CarsInfo/mpv/MPV";
import Sedan from "./pages/CarsInfo/sedan/Sedan";
import Trucks from "./pages/CarsInfo/trucks/Trucks";

export const Routes = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/loggedIn",
                element: <LoggedIn />
            },
            {
                path: "/forgetPassword",
                element: <ForgetPassword />
            },
            {
                path: "/contactUs",
                element: <ContactUs />
            },
            {
                path: "/convertibles",
                element: <Convertibles />
            },
            {
                path: "/coupe",
                element: <Coupes />
            },
            {
                path: "/hatchbacks",
                element: <Hatchbacks />
            },
            {
                path: "/suv",
                element: <SUVs />
            },
            {
                path: "/vans",
                element: <Vans />
            },
            {
                path: "/mpv",
                element: <MPV />
            },
            {
                path: "/sedan",
                element: <Sedan />
            },
            {
                path: "/trucks",
                element: <Trucks />
            },
            {
                path: "/",
                // element: <VisitorAgreement />
            },
        ]
    },
    {
        path: "*",
        element: <Navigate to={"/home"} />
    }
])