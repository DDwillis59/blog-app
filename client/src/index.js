import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./components/routes/Home"
import Post from "./components/routes/Post"
import ErrorPage from './components/Error-page';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage/>
    },
    {
        path:"/blog/:id",
        element: <Post/>,
        errorElement:<ErrorPage/>
    }
    
])
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<RouterProvider router={router}/>);
