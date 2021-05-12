import React from "react"
import { useHistory } from 'react-router-dom'
import { Navbar, NavDropdown, Button, Row, Nav } from 'react-bootstrap'
import image from './ShakeitUp.png'
import './NavBar.css'
import menuicon from './MenuIcon.svg'
import cocktailicon from './CocktailsIcon.svg'
import logout from './Logout.svg'
import ingredients from './Ingredients.svg'
import shakertin from './Shakertin.svg'
// import ingredients from './BottleGroup.svg'

export const NavBar = () => {
    const history = useHistory()
    const handleLogOut = () => {
        sessionStorage.clear()
    }
    console.log(history)
    return (
        <Nav fill variant="tabs" activeKey={`${history.location.pathname}`} className="bottom">
            <Nav.Item>
                <Nav.Link  href="/"><img src={shakertin} alt="shakertin" width="20" height="40"/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/cocktails"><img src={cocktailicon} alt="cocktails" width="20" height="40"/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/menus"><img src={menuicon} alt="menu" width="20" height="40"/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/ingredients" ><img src={ingredients} alt="ingredients" width="20" height="40"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>handleLogOut()} href="/login"><img src={logout} alt="cocktails" width="20" height="40"/>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )

}


// return (
//     <Navbar fixed="top" bg="dark" variant="tabs" className="justify-content-between">
//         <NavDropdown title="Nav" id="collasible-nav-dropdown" >
//             <NavDropdown.Item href="/">Shake It UP</NavDropdown.Item>
//             <NavDropdown.Item href="/cocktails">Cocktails</NavDropdown.Item>
//             <NavDropdown.Item href="/menus">Menus</NavDropdown.Item>
//             <NavDropdown.Item href="/ingredients">Ingredients</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item onSelect={()=>handleLogOut()} href="/login"><Button>Log Out</Button></NavDropdown.Item>
//         </NavDropdown>
//         <img
//             src={image}
//             width="100"
//             height="auto"
//             className="d-inline-block align-top"
//             alt="React"
//         />
//     </Navbar>
// )