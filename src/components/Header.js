import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LOGO from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    // let btn = "Login";
    const userName = useContext(UserContext);
    // console.log(userName.loggedInUser);
    const [loginBtn, setloginBtn] = useState("Login");

    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);

    return (
        <div className="flex bg-sky-200">
            <img className="w-20 h-20" src = {LOGO}></img>
            <div className="mx-18">
                <ul className="flex m-8">

                    <li className="px-2 mx-2">Online Status {useOnlineStatus()===true ? "✅" : "🔴"}</li>
                    <li className="px-2 mx-2"> <Link to="/">Home</Link></li>
                    <li className="px-2 mx-2"> <Link to="/about">About Us</Link></li>
                    <li className="px-2 mx-2"> <Link to="/contact">Contact Us</Link></li>
                    <li className="px-2 mx-2"> <Link to="/grocerry">Grocerry</Link></li>
                    <button className="rounded-lg px-4 py-1 bg-red-50"
                    onClick={() => {
                        loginBtn == "Login" ? setloginBtn("Logout") : setloginBtn("Login");
                        // console.log(btn);
                    }
                    }
                    >{loginBtn}</button>
                    <li className="bold px-2 mx-2">{userName.loggedInUser}</li>
                    <li className="px-2 mx-2"> <Link to="/cart">cart🛒 {cartItems.length}</Link></li>
                    {/* <li className="bold px-2 mx-2">🛒 {cartItems.length}</li> */}
                </ul>
        </div>
        </div>
    )}

    export default Header;