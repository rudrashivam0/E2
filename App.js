
import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement ==> ReactElement-> js object ==> HTMLElement(render) 

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React ␀")



// //? Now create using JSX
// //! JSX ≠≠> React.createElement ==> ReactElement-> js object ==> HTMLElement(render) 
// const JsxHeading = () => (
//     <h1 className="JSX_Class"
//         tabIndex={1}>
//         Namaste React using JSX
//     </h1>
// )


// const em = (
//     <span>
//         React Element

//     </span >

// )

// const Heading = (
//     <h1 className="JSX_Class"
//         tabIndex={1}>
//         {em}

//         Namaste React using React Element
//     </h1>
// )


// //? this is not pure  valid JS 
// //? Js engine not understand this above code 
// //! JS only understand JS E6
// //? here Parcel come into picture and play the game 
// //? JSX (transpiled before it reaches to the JS Engine ) by Parcel -> Parcel usese Babel a package 
// //? bable make it to js engine understand or called JavaScript compiler 


// // console.log(jsxHeading);
// // console.log(heading)






// //REACT Components -> every thing is Component in REACT
// //? two type Components 
// //? 1-> ClassBased component -> Old way wo writing Code 
// //? 2-> Functionl Component  -> New Way 

// //?  Functionl Component  -> Just a normal JS functions

// // const fn = () => true;
// // const fn2 = () => {
// //     return true;
// // };


// const number = 10000;

// const HeadingComponent = () => (
//     <div className="jsxDiv">
//         <JsxHeading />

//         {/* //? way to write react elemnt in JSX  */}
//         {Heading}

//         {/* //! there u can run any js code  */}

//         <h2>{number}</h2>
//         {2123 + 4434}
//         {/* <h3>{console.log( 1+ 2)}</h3> */}

//         <h1>Namaste React this is my Functional Component</h1>
//     </div>

// );


// // maninRoot.render(HeadingComponent());




// const maninRoot = ReactDOM.createRoot(document.getElementById("root"));



// //? Render the JSX component ⬇️
// maninRoot.render(<HeadingComponent />);


console.log("IN side the JSX")

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

const Header = () => {
    return (
        <div className="header">
            {/* //logo */}
            <div className="logo">
                <img src="https://t4.ftcdn.net/jpg/20/10/08/61/240_F_2010086117_AsKyDCHhVLEqqNiZ97BgLpMVMoyb0Lqe.jpg" alt="Image "></img>
            </div>
            <div className="nav-items">
                <ul className="lists">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    )

}

//! CSS in JSX as a Object 
// const style = {
//     backgroundColor: "#f0f0f0",
//     color: "black",
//     fontSize: "30px"
// } 

//? way to use it in JSX =>  style={style}


//? REst Cards Component 
const RestaurantCard = (props) => {
    console.log(props)
    return (
        <div className="res-Card">
            <img className="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/cee666df-c8f5-4d34-9510-d7593aa6cf0b_442418.JPG"></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisines}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.time}</h4>

        </div>
    )
}


const Body = () => {
    return (
        <div className="body-Cont">
            <div className="search-Bar">
                <input type="text" placeholder="Search food"></input>
                <button>Search</button>
            </div>
            <div className="res-Cont">

                {/* //? Restaurant card */}
                <RestaurantCard resName="Meghna Foods" cuisines="North Indian" rating="4.2⭐" time="30 Mins" />
                <RestaurantCard resName="KFC" cuisines="fast food" rating="4.6⭐" time="22 Mins" />
                <RestaurantCard resName="BK" cuisines="Burger" rating="4.8⭐" time="10 Mins" />

            </div>
        </div>
    )
}


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
