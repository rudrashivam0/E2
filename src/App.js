
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";



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
            {Header()}
            {Body()}
            {/* // Body  */}
        </div>
    )
}


const mainRoot = ReactDOM.createRoot(document.querySelector("#root"))

mainRoot.render(<AppLayout />);


///? ALL about data as JSON from swiggi 


