import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { updateIngredient, getIngredientById } from '../../modules/IngredientManager'

export const EditIngredientForm = () => {
    const [ingredient, setIngredient] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const {ingredientId} = useParams()
    const {history} = useHistory()

    const handleFieldChange = evt => {
        const stateToChange = {...ingredient}
        stateToChange[evt.target.id] = evt.target.value;
        setIngredient(stateToChange)
    }

    const updateExistingIngredient = evt => {
        evt.preventDefault()
        setIsLoading(true)
        const editedIngredient = {
            id: ingredientId,
            name: ingredient.name,
            categoryId: ingredient.categoryId
        }
        updateIngredient(editedIngredient)
        .then(()=> history.push('/ingredients'))
    }

    const handleCancelSave = (click) => {
        click.preventDefault()
        history.push('/ingredients')
    }

    useEffect(() => {
        getIngredientById(ingredientId)
        .then(ingredient => {
            setIngredient(ingredient)
            setIsLoading(false)
        })
    },[ingredientId])

    return(
        <>
            <form>
                <fieldset>
                    <h2>Edit Ingredient</h2>
                <div className="ingredientform-group">
                    <label htmlFor="title">Ingredient Name</label>
                    <input  type="text" 
                            id="title" 
                            onChange={handleFieldChange} 
                            autoFocus 
                            required
                            className="form-control"
                            placeholder="Name"
                            value={ingredient.name} />
                </div>
                </fieldset>
            </form>
        </>
    )
}