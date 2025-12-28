import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Feed from "./Feed";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element:<Home/>,
            children:[
        {
           path:"/",
           element:<Feed/>
        }
    ]
},
        {
            path:"/login",
            element:<Login />
        }

    ])
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body
