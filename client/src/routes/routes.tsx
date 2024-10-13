import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import AuthenticatedRoute from "../Auth/AuthenticatedRoute";
import Home from "../Home/views/Home";

export const routes=createBrowserRouter([
    {
        path:'',
        element:<App/>,
        children:[
            {
                path:'',
                element:<AuthenticatedRoute/>,
                children:[
                    {
                        path:'/',
                        element:<Navigate to={'/home'}/>
                    },
                    {
                        path:'/home',
                        element:<Home/>
                    }
                ]
            }
        ]
    }
])