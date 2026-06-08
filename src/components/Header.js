import { LOGO_URL } from "../utils/constant"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    let btnName = "login"

    //? import the custom hook as a function   this will do the online off line status in browser like tick as online 
    const onlineStatus = useOnlineStatus();

    const [btnNameReact, setbtnName] = useState("Login");
    console.log("Header rendewred")

    //? if there is no dependency array then useEffect is called on every render

    //! if there is emptey dependency array then use effect called at initial render(just Once )

    //? if u put somthing in dependency the it only render when dependency changes

    useEffect(() => {
        // console.log("Use effect called");
    }, [btnNameReact])


    return (
        <div className="header">
            {/* //logo */}
            <div className="logo">
                <img src={LOGO_URL} alt="Image "></img>
            </div>
            <div className="nav-items">


                <ul className="lists">
                    {/* <li><a href="/"> Home </a></li> */}

                    <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>

                    <li><Link to="/"> Home </Link></li>


                    <li>
                        {/* Never use Anchor Tag BCZ it make Reload PAge  */}

                        {/* <a href="/About">About Us </a>  */}
                        <Link to="/about">About</Link>
                    </li>

                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery Stoore</Link></li>

                    <li>Cart</li>

                    <button className="login-btn" onClick={() => {
                        // btnName = "logout"
                        btnNameReact === "Login" ? setbtnName("Logout") :
                            setbtnName("Login")
                        // console.log(btnNameReact)
                    }}
                    >
                        {btnNameReact}
                    </button>

                </ul>
            </div>
        </div>
    )


}

export default Header