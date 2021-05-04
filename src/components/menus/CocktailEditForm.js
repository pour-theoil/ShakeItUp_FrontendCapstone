import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { updateCocktail, deleteCocktail, getCocktialById } from '../../modules/CocktailManager'
import { getAllMenus } from '../../modules/MenuManager'
import { getAllIngredients, addCocktailMenu } from '../../modules/BuilderManager'
import { IngredientCard} from '../builder/IngredientCard'
import { Form, Button, Container} from "react-bootstrap";
 

export const CocktailEditForm = () => {
    const [menus, setMenus] = useState([])
    const [ingredients, setIngredients] = useState([])
    const {cocktailId } = useParams()
    const history  = useHistory()
    console.log(cocktailId)
    
    //set state of the cocktail object
    const [cocktail, setCocktail] = useState({})
    console.log(cocktail)
    
    //set state for the menu relationship
    const [cocktailmenu, setCocktailMenu] = useState({
        cocktailId: cocktailId,
        menuId: 0
    }
    )
    const getCocktail = () => {
        getCocktialById(cocktailId)
        .then(response => setCocktail(response))
    }
    
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
        console.log(cocktailmenu)
    }


    //query for the ingredients from the cocktailingredients table
    const getIngredients = () =>{
        getAllIngredients(cocktailId)
        .then(ingredients => {
            ingredients.reverse()
            setIngredients(ingredients)
        })
        
    }
    console.log(ingredients)
    //save the menu and the cocktail states after they have been updated
    const handleSaveEvent = (click) => {
        click.preventDefault()
        if (cocktail.name === "" || cocktail.menuId === 0) {
            window.alert("Please fill in all fields")
        } else {    
            updateCocktail(cocktail)
            .then(()=> {
                addCocktailMenu(cocktailmenu)})
            .then(()=> history.push(`/menus/${cocktailmenu.menuId}`))
        }

    }
    
    //Delete the cocktail object
    const handleCancelSave = (click) => {
        click.preventDefault()
        deleteCocktail(cocktailId)
        .then(()=> history.push(`/menus/${cocktailmenu.menuId}`))
    }

    //Get available menus
    useEffect(()=>{
        getMenus()
    },[])

    useEffect(()=> {
        getCocktail()
    }, [])

    //Get ingredients for the cocktail
    useEffect(()=>{
        getIngredients()
    },[])

    return(
        
        <Container className="justified-content-center">
        <h3 className="cocktailform-name"> Edit Cocktail</h3>
            <Form>

            <Form.Group>
                {/* <Form.Label htmlFor="name">Cocktail Name</Form.Label> */}
                <Form.Control  type="text" 
                        id="name" 
                        onChange={handleCocktailChange} 
                        autoFocus 
                        required
                        className="form-control"
                        placeholder="Name"
                        defaultValue={cocktail?.name} />
            </Form.Group>
            <Form.Group>   
                <Form.Label htmlFor="menuId">Select Menu</Form.Label>
                <Form.Control as="select" value={cocktailmenu.menuId} name="menuId" id="menuId" onChange={handleMenuChange} className="form-control" >
                    <option value={cocktailmenu?.id}>Menu</option>
                    {menus.map(t => (
                        <option key={t.id} value={t.id}>
                            {t.name}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
                {ingredients.map(ingredient => <IngredientCard  key={ingredient?.id}
                ingredient={ingredient} />)}
            
            
    
            </Form>
            <Button className="article-btn"
                onClick={handleSaveEvent}>
                Save Entry
            </Button>
            <Button className="article-btn"
                variant="warning"
                onClick={handleCancelSave}>
                Cancel
            </Button>
                
    </Container>

    )

}