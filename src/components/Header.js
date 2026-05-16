import { LOGO_URL } from "../utils/constant"
import { useState } from "react";



const Header = () => {
    let btnName = "login"

    const [btnNameReact, setbtnName] = useState("Login");
    return (
        <div className="header">
            {/* //logo */}
            <div className="logo">
                <img src={LOGO_URL} alt="Image "></img>
            </div>
            <div className="nav-items">
                <ul className="lists">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li> 
                    <button className="login-btn" onClick={() => {
                        // btnName = "logout"
                       btnNameReact === "Login" ? setbtnName("Logout") :
                       setbtnName("Login")
                        console.log(btnNameReact)
                    }}
                    >
                        {btnNameReact }
                    </button>

                </ul>
            </div>
        </div>
    )

}

export default Header