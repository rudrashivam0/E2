import { LOGO_URL } from "../utils/constant"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from 'react-redux'


const Header = () => {
    let btnName = "login"
    //! Context in react 
    const { loggedInUser } = useContext(UserContext);
    // console.log(loggedInUser);

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


    //! selector is hust a hook and a hook is just a normal JS Function 
    //? Susbcribing the dtore using the selector 
    const cartItems = useSelector((store) => store.Cart.items);
    console.log(cartItems);

    
    return (
        <div className='flex justify-between bg-pink-100 shadow-md  rounded-md'>
            {/* //logo */}
            <div className='w-23 rounded-b-full'>
                <img src={LOGO_URL} alt="Image " className="rounded-md"></img>
            </div>

            <div className='flex flex-col  justify-center align-center' >
                <ul className='p-6 mr-3 gap-8 flex justify-center items-center'>
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

                    <li className="font-bold text-xl">
                        
                        <Link to="/cart">Cart-({cartItems.length})</Link>
                    </li>


                    <li>
                        <button className='bg-red-200 w-20 h-10 rounded-md  cursor-pointer hover:bg-red-300 ' onClick={() => {
                            // btnName = "logout"
                            btnNameReact === "Login" ? setbtnName("Logout") :
                                setbtnName("Login")
                            // console.log(btnNameReact)
                        }}
                        >
                            {btnNameReact}
                        </button>
                    </li>

                    <li className="px-1 font-bold">{loggedInUser}</li>


                </ul>
            </div>
        </div>
    )


}

export default Header