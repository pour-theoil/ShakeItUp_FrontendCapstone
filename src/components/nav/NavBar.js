import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Shake It UP</Link>
            </li>
            {/* <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Menus</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Ingredients</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Log Out</Link>
            </li> */}
        </ul>
    )
}
