import User from "./User"
import UserClass from "./UserClass"

import React from "react";
import { Component } from "react";
import UserClass2 from "./UserClass2";


class About extends Component {
    constructor(props) {
        super(props);
        // console.log("Parent co nstructor is called");
    }

    componentDidMount() {
        // console.log("Parent componentDidMount is called");

        
    }


    render() {
        // console.log("Parent render is called   ");
        return (
            <div>
                <h1>About Class componrnt</h1>
                <h2>This is all about the About Section </h2>
                <UserClass name={"Rudra (Class)"} location={"Varanasi (Clss Based)"} />

                {/* <UserClass2 name={"Rudra (Class)"} location={"Varanasi (Clss Based)"} /> */}

                {/* 
                <UserClass name={"Elon Musk (Class)"} location={"US (Clss Based)"} /> */}


            </div>
        )
    }
}

/* This is all about the how the lifecycle method works mounting and unmounting
//!Parent co nstructor is called
//!Parent render is called   

//! Rudra (Class)Child constructor is called
//!Rudra (Class)Child render is called   

//! Elon Musk (Class)Child constructor is called
//! Elon Musk (Class)Child render is called   

//! Rudra (Class)Child componentDidMount is called
//! Elon Musk (Class)Child componentDidMount is called

//! Parent co//!mponent componentDidMount is called
*/




// const About = () => {

//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is all about the About Section </h2>
//             {/* <User name={"Rudra (functional)"} /> */}

//             <UserClass name={"Rudra (Class)"} location={"Varanasi (Clss Based)"} />
//         </div>
//     )
// }

export default About;