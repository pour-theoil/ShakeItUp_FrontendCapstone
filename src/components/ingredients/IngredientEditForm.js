import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { updateIngredient, getIngredientById } from '../../modules/IngredientManager'
import { getAllTypes } from '../../modules/IngredientManager'

export const EditIngredientForm = () => {
    const [ingredient, setIngredient] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [types, setTypes] = useState([])

    const { ingredientId } = useParams()
    const { history } = useHistory()

    const getTypes = () => {
        getAllTypes()
        .then(type => setTypes(type))
    }

    const handleFieldChange = evt => {
        const stateToChange = { ...ingredient}
        stateToChange[evt.target.id] = evt.target.value;
        setIngredient(stateToChange)
    }

    const updateExistingIngredient = evt => {
        evt.preventDefault()
        setIsLoading(true)
        const editedIngredient = {
            id: ingredientId,
            name: ingredient.name,
            typeId: ingredient.typeId,
            abv: ingredient.abv,
            alcoholic: ingredient.alcoholic
        }
        console.log(ingredient)
        updateIngredient(editedIngredient)
            .then(() => history.push('/ingredients'))
    }

    const handleCancelSave = (click) => {
        click.preventDefault()
        history.push('/ingredients')
    }

    useEffect(() => {
        getTypes()
    },[])

    useEffect(() => {
        getIngredientById(ingredientId)
            .then(ingredient => {
                setIngredient(ingredient)
                setIsLoading(false)
            })
    }, [ingredientId])

    return (
        <>
            <form>
                <fieldset>
                    <h2>Edit Ingredient</h2>
                    <div className="ingredientform-group">
                        <label htmlFor="name">Ingredient Name</label>
                        <input type="text"
                            id="name"
                            onChange={handleFieldChange}
                            autoFocus
                            required
                            className="form-control"
                            placeholder="Name"
                            value={ingredient.name} />
                    </div>
                    <div className="ingredientform-group">
                        <label htmlFor="type">Ingredient Type</label>
                        <select value={ingredient.typeId} name="typeId" id="typeId" onChange={handleFieldChange} className="form-control" >
                            <option value="0">Type</option>
                            {types.map(t => (
                                <option key={t.id} value={t.id}>
                                    {t.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="ingredientform-group">
                        <label htmlFor="abv">ABV of Ingredient</label>
                        <input type="text"
                            id="abv"
                            required
                            onChange={handleFieldChange}
                            className="form-control"
                            placeholder="abv"
                            value={ingredient.abv} />
                        <label htmlFor="abv">%</label>
                    </div>
                    <div>
                    <button
                        type="button" disabled={isLoading}
                        onClick={updateExistingIngredient}
                        className="article-btn"
                    >Submit</button>
                    </div>
                    <button className="article-btn"
                        onClick={handleCancelSave}>
                        Cancel
                    </button>
                </fieldset>
            </form>
        </>
    )
}