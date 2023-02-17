import React , {lazy, Suspense,useState} from 'react';
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
import userContext from './components/utils/userContext';
import { Provider } from "react-redux";
import store from "./components/utils/store"
import Cart from './components/Cart';

//import Instamart from './components/Instamart';
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
//chunking
//code spliting
//dynamic bundling
// lazy loading
// on demand loading
//dynamic import



const App = ()=>{
    const[my,setMy] = useState({
        name : "shreya",
        email : "shreypilot@gmail.com"
    })
    return(
        <div >
            <Provider store={store}>
            <userContext.Provider
            value={{
                user:my,
                setUser:setMy,
            }}>
            <Header />
            <Outlet />
            <Footer />
            </userContext.Provider> 
            </Provider>
            
           
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
                element: <Body/**  user= {{
                    name : "shreya",
                    email : "shreypilot@gmail.com"
                }}*/ />,//props driling
                

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
            {
                path: "/cart",
                element: <Cart/>,
            },

        ],
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    
    <RouterProvider router={appRouter} />
    );