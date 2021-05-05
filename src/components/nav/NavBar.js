import React from "react"
import { Navbar, NavDropdown, Button } from 'react-bootstrap'
import image  from './ShakeitUp.png'
import './NavBar.css'

export const NavBar = () => {
    const handleLogOut = () =>{
        sessionStorage.clear()
    } 

    return (
        <Navbar fixed="top" bg="dark" variant="tabs" className="justify-content-between">
            <NavDropdown title="Nav" id="collasible-nav-dropdown" >
                <NavDropdown.Item href="/">Shake It UP</NavDropdown.Item>
                <NavDropdown.Item href="/cocktails">Cocktails</NavDropdown.Item>
                <NavDropdown.Item href="/menus">Menus</NavDropdown.Item>
                <NavDropdown.Item href="/ingredients">Ingredients</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onSelect={()=>handleLogOut()} href="/login"><Button>Log Out</Button></NavDropdown.Item>
            </NavDropdown>
            <img
                src={image}
                width="100"
                height="auto"
                className="d-inline-block align-top"
                alt="React"
            />
        </Navbar>
    )
}
