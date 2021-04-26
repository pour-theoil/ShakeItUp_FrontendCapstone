import React, { useEffect, useState } from 'react'
import { getAllIngredients } from '../../modules/BuilderManager'
import { Card, Button } from 'react-bootstrap'

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
                <Card>
                    <Card.Title>{cocktail.cocktail.name}</Card.Title>
                    <Card.Subtitle>{ingredients.join(", ")}</Card.Subtitle>
                    <Button type="Button" className="article-btn"onClick={() => removeCocktailFromMenu(cocktail.id)}>Delete</Button>
                </Card>
        </>
    )
}