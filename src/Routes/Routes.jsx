import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";




const Router = createBrowserRouter([
    {
        path: "/", element: <Layout />, children: [

            { path: '/', element: <Home /> },
            { path: '/services', element: <Services /> },
            { path: '/contact', element: <Contact /> },
        ]
    },

])

export default Router;