import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../App'
import { Home, Gallery, NotFound, ById } from '../pages/index'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/gallery',
                element: <Gallery/>
            },
            {
                path: '/gallery/character/:id',
                element: <ById/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])