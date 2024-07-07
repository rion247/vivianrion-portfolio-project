import MainLayOut from './../Layout/MainLayOut/MainLayOut';
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import { createBrowserRouter } from "react-router-dom";
import HomePage from './../Pages/HomePage/HomePage';
// import Services from '../Pages/Services/Services';
// import Works from './../Pages/Works/Works';
// import Resume from './../Pages/Resume/Resume';
// import Skills from './../Pages/Skills/Skills';
// import Testimonials from './../Pages/Testimonials/Testimonials';
// import Contact from '../Pages/Contact/Contact';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            // {
            //     path: "/services",
            //     element: <Services />,
            // },
            // {
            //     path: "/works",
            //     element: <Works />,
            // },
            // {
            //     path: "/resume",
            //     element: <Resume />,
            // },
            // {
            //     path: "/skills",
            //     element: <Skills />,
            // },
            // {
            //     path: "/contact",
            //     element: <Contact />,
            // },
        ],
    },
]);
