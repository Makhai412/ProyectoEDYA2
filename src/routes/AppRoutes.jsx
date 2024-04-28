import React from 'react'
import Home from "../components/homecomponent/Home";
import { InMovie } from '../pages/InMovie';
import NotFound from '../components/homecomponent/NotFound';
import { useRoutes } from "react-router-dom";



const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/home', element: <Home /> },
        { path: '/movie/:id', element: <InMovie /> },
        { path: '/*', element: <NotFound /> }

    ])

    return routes
}

export default AppRoutes;