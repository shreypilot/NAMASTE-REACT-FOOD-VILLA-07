import React , {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error"
//import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from './components/RestaurantMenu';
import ProfileClass from './components/ProfileClass';
import Shimmer from './components/Shimmer';
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
//import Instamart from './components/Instamart';

//chunking
//code spliting
//dynamic bundling
// lazy loading
// on demand loading
//dynamic import

const Instamart = lazy(() => import("./components/Instamart"));

const About = lazy(() => import("./components/About"));

const App = ()=>{
    return(
        <div >
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
                

            },
            {
                path: "/About",
                element: 
                     <Suspense fallback = {<h1>Loading...</h1>}>
                            <About />
                        </Suspense>
                        ,
                // children: [
                //     {
                //         path: "/ProfileClass",
                //         element: <ProfileClass/>,
                //     },
                // ],
            },
            {
                path: "/Contact",
                element: <Contact/>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>,
            },
            {
                path: "/instamart",
                element: <Suspense fallback= {<Shimmer />}>
                            <Instamart/>
                        </Suspense>,
            },

        ],
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    
    <RouterProvider router={appRouter} />
    );