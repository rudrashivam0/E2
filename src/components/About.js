import User from "./User"
import UserClass from "./UserClass"

import React from "react";
import { Component } from "react";


class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent co nstructor is called");
    }

    componentDidMount() {
        console.log("Parent componentDidMount is called");
    }


    render() {
        console.log("Parent render is called   ");
        return (
            <div>
                <h1>About Class componrnt</h1>
                <h2>This is all about the About Section </h2>
                <UserClass name={"Rudra (Class)"} location={"Varanasi (Clss Based)"} />
            </div>
        )
    }
}




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