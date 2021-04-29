import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { updateCocktail, deleteCocktail } from '../../modules/CocktailManager'
import { getAllMenus } from '../../modules/MenuManager'
import { getAllIngredients, addCocktailMenu } from '../../modules/BuilderManager'
import { IngredientCard} from './IngredientCard'
import { Form, Button, Col, Container, Card } from "react-bootstrap";
 

export const EditCocktailForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [menus, setMenus] = useState([])
    const [ingredients, setIngredients] = useState([])
    const {cocktailId} = useParams()
    const history  = useHistory()
    
    //set state of the cocktail object
    const [cocktail, setCocktail] = useState({
        id: cocktailId
    })

    //set state for the menu relationship
    const [cocktailmenu, setCocktailMenu] = useState({
        cocktailId: cocktailId,
        menuId: 0
    }
    )
    
    //Get menus to populate the drop down of the app
    const getMenus = () => {
        getAllMenus()
        .then(menus => setMenus(menus))
    }

    //Handle changes for the cocktail state
    const handleCocktailChange = (event) => {
        const newCocktail = {...cocktail}
        let selectedValue = event.target.value
        newCocktail[event.target.id] = selectedValue
        setCocktail(newCocktail)
    }

    //Handle changes for the menu state
    const handleMenuChange = (event) => {
        const newCocktailMenu = {...cocktailmenu}
        let selectedValue = event.target.value
        newCocktailMenu[event.target.id] = selectedValue
        setCocktailMenu(newCocktailMenu)
    }

    //query for the ingredients from the cocktailingredients table
    const getIngredients = () =>{
        getAllIngredients(cocktailId)
        .then(ingredients => {
            ingredients.reverse()
            setIngredients(ingredients)
        })
        
    }
    
    //save the menu and the cocktail states after they have been updated
    const handleSaveEvent = (click) => {
        click.preventDefault()
        if (cocktail.name === "" || cocktail.menuId === 0) {
            window.alert("Please fill in all fields")
        } else {
            
            updateCocktail(cocktail)
            .then(()=> {
                addCocktailMenu(cocktailmenu)})
            .then(()=> history.push('/'))
        }

    }
    
    //Delete the cocktail object
    const handleCancelSave = (click) => {
        click.preventDefault()
        deleteCocktail(cocktailId)
        .then(()=> history.push('/'))
    }

    //Get available menus
    useEffect(()=>{
        getMenus()
    },[])

    //Get ingredients for the cocktail
    useEffect(()=>{
        getIngredients()
    },[])

    return(
        <>
        <h3 className="cocktailform-name"> New Cocktail</h3>
        <Container className="cocktailform">
            <Form.Group className="cocktailform-group">
                <Form.Label htmlFor="name">Cocktail Name</Form.Label>
                <Form.Control  type="text" 
                        id="name" 
                        onChange={handleCocktailChange} 
                        autoFocus 
                        required
                        className="form-control"
                        placeholder="Name"
                        value={cocktail.name} />
            </Form.Group>
            <Form.Group className="cocktailform-group">   
                <Form.Label htmlFor="menuId">Select Menu</Form.Label>
                <Form.Control as="select" value={cocktailmenu.menuId} name="menuId" id="menuId" onChange={handleMenuChange} className="form-control" >
                    <option value="0">Menu</option>
                    {menus.map(t => (
                        <option key={t.id} value={t.id}>
                            {t.name}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
                {ingredients.map(ingredient => <IngredientCard  key={ingredient.id}
                ingredient={ingredient} />)}
            
            
        <Col>
            <Button className="article-btn"
            onClick={handleSaveEvent}>
            Save Entry
            </Button>
        <Button className="article-btn"
            onClick={handleCancelSave}>
            Cancel
        </Button>
                </Col>
    </Container>
    </>
    )

}