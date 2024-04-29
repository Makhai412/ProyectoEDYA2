import React from 'react'
import Home from "../components/homecomponent/Home";
import { InMovie } from '../pages/InMovie';
import NotFound from '../components/homecomponent/NotFound';
import { useRoutes } from "react-router-dom";
import ListaCategories from '../components/categoriescomponent/ListaCategories';
import CardCategories from '../components/categoriescomponent/CardCategories';
import ActionCategory from '../components/categoriescomponent/InEachCategory/ActionCategory';
import AdventureCategory from '../components/categoriescomponent/InEachCategory/AdventureCategory';
import FantasyCategory from '../components/categoriescomponent/InEachCategory/FantasyCategory';
import TerrorCategory from '../components/categoriescomponent/InEachCategory/TerrorCategory';



const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/home', element: <Home /> },
        { path: '/movie/:id', element: <InMovie /> },
        { path: '/categoria', element: <ListaCategories /> },
        { path: '/categoria/:title', element: <CardCategories /> },
        { path: '/categoria/Acción', element: <ActionCategory /> },
        { path: '/categoria/Aventura', element: <AdventureCategory /> },
        { path: '/categoria/Fantasía', element: <FantasyCategory /> },
        { path: '/categoria/Terror', element: <TerrorCategory /> },

        { path: '/*', element: <NotFound /> }


    ])

    return routes
}

export default AppRoutes;