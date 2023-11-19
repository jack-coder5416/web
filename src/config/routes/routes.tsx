import { Outlet, createBrowserRouter, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import LandingPage from "../../pages/LandingPage/LandingPage";
import OrganisationBar from "../../components/OrganisationBar";
import AboutUsPage from "../../pages/AboutUsPage";
import EmployeePage from "../../pages/EmployeePage";
import GalleryPage from "../../pages/GalleryPage";
import ContactPage from "../../pages/ContactPage";





const AppLayout = () => {
    const location = useLocation();

    // Hide the Navbar for login and signup routes
    const hideNavbar = ( location.pathname === "/login"
    );

    return (
        <div className="w-screen">
            
             {!hideNavbar && <OrganisationBar/>}
             {!hideNavbar && <Navbar />}
           
            <Outlet />
        </div>
    );
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        
        children: [
            {
                path: "/",
                element: <LandingPage/>,
            },
            {
                path: "/contact",
                element: <ContactPage/>,
            },
            {
                path: "/gallery",
                element: <GalleryPage/>,
            },
            {
                path: "/about",
                element: <AboutUsPage/>,
            },
            {
                path: "/employees",
                element: <EmployeePage/>,
            },
            
        ],
    },
]);
