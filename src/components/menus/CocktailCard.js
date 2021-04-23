import React, { useEffect, useState } from 'react'
import { getAllIngredients } from '../../modules/BuilderManager'

export const CocktailCard = ({ cocktail, removeCocktailFromMenu }) => {
    
    //create a state variable for the ingredients associated with the specific cocktail. Then join them into a string.
    const [ingredients, setIngredients] = useState([])
    const getIngredients = () =>{
        console.log(cocktail.id)
        getAllIngredients(cocktail.id)
        .then(ingredients => {
            let ingredientsObj = ingredients.map(ingredient => ingredient.ingredient.name)
            setIngredients(ingredientsObj)
        }
        )
    }
    console.log(ingredients)
    useEffect(()=>{
        getIngredients()
    },[])
    return(
        <>
                <article className="cocktail">
                    <h2 className="cocktail-name">{cocktail.cocktail.name}</h2>
                    <p className="cocktail-ingredients">{ingredients.join(", ")}</p>
                </article>
                <button type="button" className="article-btn"onClick={() => removeCocktailFromMenu(cocktail.id)}>Delete</button>
        </>
    )
}