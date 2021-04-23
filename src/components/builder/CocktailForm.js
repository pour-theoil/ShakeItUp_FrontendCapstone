import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { updateCocktail, deleteCocktail } from '../../modules/CocktailManager'
import { getAllMenus } from '../../modules/MenuManager'
import { getAllIngredients, addCocktailMenu } from '../../modules/BuilderManager'
import { IngredientCard} from './IngredientCard'
 

export const EditCocktailForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [menus, setMenus] = useState([])
    const [ingredients, setIngredients] = useState([])
    const {cocktailId} = useParams()
    const { history } = useHistory()
    
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
        console.log(cocktail.id)
        getAllIngredients(cocktailId)
        .then(ingredients => setIngredients(ingredients))
        
    }
    
    console.log("what ingredients", ingredients)
    //save the menu and the cocktail states after they have been updated
    const handleSaveEvent = (click) => {
        click.preventDefault()
        if (cocktail.name === "" || cocktail.menuId === 0) {
            window.alert("Please fill in all fields")
        } else {
            console.log(cocktail)
            updateCocktail(cocktail)
            .then(()=> {
                addCocktailMenu(cocktailmenu)})
            // .then(()=> history.push('/'))
        }

    }
    
    //Delete the cocktail object
    const handleCancelSave = (click) => {
        click.preventDefault()
        deleteCocktail(cocktailId)
        // .then(()=> history.push('/'))
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
        <form className="cocktailform">
        <h3 className="cocktailform-name"> New Cocktail</h3>
        <fieldset>
            <div className="cocktailform-group">
                <label htmlFor="name">Cocktail Name</label>
                <input  type="text" 
                        id="name" 
                        onChange={handleCocktailChange} 
                        autoFocus 
                        required
                        className="form-control"
                        placeholder="Name"
                        value={cocktail.name} />
            </div>
            <div className="cocktailform-group">   
                <label htmlFor="menuId">Select Menu</label>
                <select value={cocktailmenu.menuId} name="menuId" id="menuId" onChange={handleMenuChange} className="form-control" >
                    <option value="0">Menu</option>
                    {menus.map(t => (
                        <option key={t.id} value={t.id}>
                            {t.name}
                        </option>
                    ))}
                </select>
            </div>
            {ingredients.map(ingredient => <IngredientCard  key={ingredient.id}
                                                            ingredient={ingredient} />)}
            </fieldset>
            <button className="article-btn"
            onClick={handleSaveEvent}>
            Save Entry
        </button>
        <button className="article-btn"
            onClick={handleCancelSave}>
            Cancel
        </button>
    </form>
    )

}