
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//? imort of react touter in V6
// import { createBrowserRouter } from "react-router-dom";
//? imort of react touter in V7
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";

// import About from "./components/About";
import ContactUs from "./components/ContactUs";

import Error from "./components/Error";

import Resturantmenu from "./components/Resturantmenu";

// import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";


//? Chunking
//? Code Splitting
//? Lazy Loading => only load when needed or On deman load 
//? Dynamic Bundling 
//? Dynamic Import
//? 


//! React.lazy should be declared outside the component.
//! If declared inside the component, a new lazy component is created on every render,
//! causing React to reset its state and potentially re-trigger loading.
//! Imports are cached by the browser/bundler, so the file is not downloaded again,
//! but creating the lazy component inside the render function is inefficient.

const Grocery = lazy(() => {
    return import("./components/Grocery")
})

const About = lazy(() => {
    return import("./components/About")
})
/**
 * //!
 *? HEADER 
 * -logo
 * -nave Item 
 * - cart 
 * 
 * ?BODY 
 * -Search Bar 
 * -Search button 
 * -Restaurant Container 
 *    --Cards 
 *.   --image
 *    --Name 
 *    --Reating
 *    --Cusins
 *    --delivery time 
 * 
 * 
 * 
 *? FOOTER 
 * -CopyRight
 * -Address
 * -Contact 
 * 
 */




//! CSS in JSX as a Object 
// const style = {
//     backgroundColor: "#f0f0f0",
//     color: "black",
//     fontSize: "30px"
// } 

//? way to use it in JSX =>  style={style properties}




//? REst Cards Component 


// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)



const AppLayout = () => {
    return (
        <div className="app">
            {/* //HAeader */}
            {/* <Header /> */}
            {/* {Header()}
            {Body()} */}

            <Header />

            {/* if path is = / then body  */}

            {/* if path is = about  then about  */}

            {/* if path is = contact then contact   */}

            <Outlet />

            {/* <Body /> */}
            {/* // Body  */}
        </div>
    )
}

//? BAsic Routing is this 

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                //? the resId is dynamic for diffrent router  resturant 
                path: "/resturants/:resId",
                element: < Resturantmenu />

            }, {

                path: "/grocery",
                element: <Suspense fallback={
                    <h1>Loading..........

                    </h1>}><Grocery /></Suspense>
            }

        ],
        errorElement: <Error /> //? this is used to handle Error 
    },

])



const mainRoot = ReactDOM.createRoot(document.querySelector("#root"))

mainRoot.render(<RouterProvider router={appRouter} />);


///? ALL about data as JSON from swiggi 


