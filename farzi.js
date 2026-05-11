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