import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getCocktails, getMenuById, deleteMenuCocktail } from '../../modules/MenuManager'
import { CocktailCard } from './CocktailCard'
import { Container, Button, Row } from 'react-bootstrap'

export const MenuDetails = () => {
    const [cocktails, setCocktails] = useState([])
    const [menu, setMenu] = useState([])
    const history = useHistory()
    const {menuId} = useParams()

    // get menu details season/notes
    const getSetMenu = () => {
        getMenuById(menuId)
        .then(menuObj => setMenu(menuObj))
    }

    const removeCocktailFromMenu = (id) => {
        deleteMenuCocktail(id)
        .then(() => getMenuCocktails())
    }
    
    //get cocktails associated with that menu
    const getMenuCocktails = () => {
        getCocktails(menuId)
        .then(cocktail => setCocktails(cocktail))
    }
    


    useEffect(() => {
            getSetMenu()
    },[cocktails])

    useEffect(() => {
        getMenuCocktails()
    },[])

    
    return (
        <>
              <Container className="justified-content-center">
                
                    <h2 className="menu-title">{menu[0]?.name}</h2>
                    <h5>Season: {menu[0]?.season.name}</h5>
                <Container className="cocktails-card">
                    {cocktails.map(cocktail => <CocktailCard   cocktail={cocktail}
                                                                key={cocktail.id}
                                                                removeCocktailFromMenu={removeCocktailFromMenu}/>)}
                </Container>
                <Row className="create-event">
                    <Button type="Button"
                            variant="primary"
                            className="fixed-button"
                            onClick={() => {history.push('/')}}> + Cocktail</Button>
                </Row>
            </Container>
        </>
    )
}