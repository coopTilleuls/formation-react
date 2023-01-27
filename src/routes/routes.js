import {createBrowserRouter, redirect} from 'react-router-dom';
import {routes as bookRoutes} from '../features/books/routes/routes';

export const router = createBrowserRouter([
    {
        loader: () => redirect('/livres'),
        path: "/",
    },
    ...bookRoutes,
]);
