import React from 'react'
import { Link } from 'react-router-dom'

export const IngredientCard = ({ingredient, deleteSetIngredient}) => {
    return(
        <>
            <article className="ingredient">
                <h2 className="ingredient-title">{ingredient.name}</h2>
                <p className="ingredient-category">{ingredient.categoryId}</p>
                <Link to={`/ingredients/${ingredient.id}/edit`}><button className="article-btn">Edit</button></Link>
                <button type="button" className="article-btn"onClick={() => deleteSetIngredient(ingredient.id)}>Delete</button>
            </article>
        </>
    )
}