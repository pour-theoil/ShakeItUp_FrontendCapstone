import React, { useEffect, useState } from 'react'
import { getAllIngredients, deleteIngredient} from '../../modules/IngredientManager'
import { useHistory } from 'react-router-dom'
import { IngredientCard } from './IngredientCard'

export const IngredientList = () => {
    const [ ingredients, setIngredients ] = useState([])
    const history = useHistory()

    const getIngredients = () => {
        getAllIngredients()
        .then(ingredients => {
            setIngredients(ingredients)})
    } 

    const deleteSetIngredient = (id) => {
        deleteIngredient(id)
        .then(() => getIngredients())
    }

    useEffect(() => {
        getIngredients()
    }, [])
    
    return (
        <>
            <section className="ingredients">
                <div className="ingredient-card">
                    {ingredients.map( ingredient => <IngredientCard ingredient={ingredient}
                                                                key={ingredient.id}
                                                                deleteSetIngredient={deleteSetIngredient}
                                                                 />)}
                </div>
                <div className="create-event">
                    <button type="button"
                            className="article-btn"
                            onClick={() => {history.push('/ingredients/create')}}> + Ingredient</button>
                </div>
            </section>
        </>
    )
}