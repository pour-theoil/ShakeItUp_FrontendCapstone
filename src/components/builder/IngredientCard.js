import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { updateCocktailIngredients } from '../../modules/BuilderManager'
 
export const IngredientCard = ({ingredient, saveIngredients}) => {
    const [manyToMany, setManyToMany ] = useState({
        id: ingredient.id,
        cocktailId: ingredient.cocktailId,
        ingredientId: ingredient.ingredientId,
        pour: 0    
    })
    //Handle changes for the cocktail state
    
    const handleInputChange = (event) => {
        const newPour = { ...manyToMany }
        let selectedValue = event.target.value
        // if (event.target.id.includes("Id")) {
        // 	selectedValue = parseInt(selectedValue)
        // }
       
        newPour[event.target.id] = selectedValue
        setManyToMany(newPour)
    }

    const addPourValues = () => {
        updateCocktailIngredients(manyToMany)
    }

    useEffect(()=>{
        if(saveIngredients) {
            addPourValues()
        }
    })
    return(
            <Form.Group>
                <Form.Label>{ingredient.ingredient.name}</Form.Label>
                <Form.Control  type="number" step={.25} 
                        id="pour"
                        className="pourvalue" 
                        onChange={handleInputChange} 
                        autoFocus 
                        required
                        placeholder="pour"
                        defaultValue={ingredient.pour}
                         />
            </Form.Group>
    )
}