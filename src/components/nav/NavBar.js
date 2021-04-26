import React from "react"
import { Nav } from 'react-bootstrap'

export const NavBar = () => {
    return (
        <Nav fill variant="tabs" defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link href="/">Shake It UP</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/menus">Menus</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/ingredients">Ingredients</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">Log Out</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
