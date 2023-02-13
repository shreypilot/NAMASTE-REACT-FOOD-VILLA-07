import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error"
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';

import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";



const App = ()=>{
    return(
        <div className="App">
           <Header />
           <Outlet />
           <Footer />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body/>,
                children: [
                    {
                        path: "/Profile",
                        element: <Profile/>,
                    },
                ]

            },
            {
                path: "/About",
                element: <About/>,
            },
            {
                path: "/Contact",
                element: <Contact/>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>,
            },

        ],
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    
    <RouterProvider router={appRouter} />
    );