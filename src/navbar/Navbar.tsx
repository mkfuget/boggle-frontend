import React from "react"
import logo from '../assets/icons/ACCLogoLightBlueTransparent.png'; // Tell webpack this JS file uses this image
import "./navbar.css"
export const Navbar = () => {
    return (
    <div>
        <ul id="navbar">
            <li>
                <div id = "navbarlogo">
                    <img 
                        src = {logo} 
                        alt = "logo"
                    ></img>     
                </div>           
            </li>
            <li id = "companytitle">APPLIED CODING CONCEPTS</li>
            <li><a href="/modules">Modules</a></li>
            <li><a href="/">Learn</a></li>
            <li><a href="/quizes">Quizes</a></li>
            <li><a href="/challenges">Challenges</a></li>
        </ul>
    </div>
)
}

export default Navbar;