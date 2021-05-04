import React, { useEffect, useState } from 'react'
import { getAllIngredients } from '../../modules/BuilderManager'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export const CocktailCard = ({ cocktail, removeCocktailFromMenu }) => {
    const history = useHistory()
    //create a state variable for the ingredients associated with the specific cocktail. Then join them into a string.
    const [ingredients, setIngredients] = useState([])
    const getIngredients = () =>{
        getAllIngredients(cocktail.cocktailId)
        .then(ingredients => {
            let ingredientsObj = ingredients.map(ingredient => ingredient.ingredient.name)
            ingredientsObj.reverse()
            setIngredients(ingredientsObj)
        }
        )
    }
    useEffect(()=>{
        getIngredients()
    },[])
    return(
        <>
                <Card bg="info" className="ingredient-card">
                    <Card.Title>{cocktail.cocktail?.name}</Card.Title>
                    <Card.Subtitle>{ingredients.join(", ")}</Card.Subtitle>
                    
                    <Button variant="outline-primary" className="article-btn" onClick={() => history.push(`/cocktails/${cocktail.cocktail.id}/edit`)}>Edit</Button>
                </Card>
        </>
    )
}