import { createBrowserRouter } from "react-router-dom";
import Course from "../Courses/Course";
import Faq from "../FAQ/Faq";
import Main from "../Main/Main";
import Theme from "../Theme/Theme";
import Blogs from "./Blogs/Blogs";
import CourseDtails from "./Coursesdtail/CourseDtails";
import Home from "./Home/Home";
import Login from "./Login/Login";
import PrivateRoute from "./privateroute/PrivateRoute";
import Reg from "./Reg/Reg";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [{
            path: '/',
            element: <Home></Home>

        },
        {
            path: '/home',
            element: <Home></Home>

        },
        {
            path: '/courses',
            element: <Course></Course>

        },
        {
            path: '/courses/:id',
            element: <PrivateRoute><CourseDtails></CourseDtails></PrivateRoute>

        },
        {
            path: '/faq',
            element: <Faq></Faq>

        }, {
            path: '/blogs',
            element: <Blogs></Blogs>

        },
        {
            path: '/theme',
            element: <Theme></Theme>

        },
        {
            path: '/login',
            element: <Login></Login>

        },
        {
            path: '/reg',
            element: <Reg></Reg>

        }

        ]
    }

])