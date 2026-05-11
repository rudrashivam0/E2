import { LOGO_URL } from "../utils/constant"



const Header = () => {
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

                </ul>
            </div>
        </div>
    )

}

export default Header