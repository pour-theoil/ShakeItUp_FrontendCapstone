import React, { useEffect, useState } from "react";
import { getRandomId } from '../../modules/BuilderManager'

export const BuilderCard = ({type, reload, ingredientArray, index}) => {
    const [ingredient, setIngredient] = useState({})
    
  
    const newIngredient = () => {
        getRandomId(type).then(setIngredient)
    }

    const updateIngredientArray = () => {
        ingredientArray[index] = ingredient
    }
    
    useEffect(() => {
        if(ingredient.id) {
            updateIngredientArray()
        } 
    },[ingredient])

    useEffect(() => {
        if (reload) {
            newIngredient()
        }
    },[reload])
    return (
        <div className="ingredientcard">
            <div>
                <h3>{ingredient?.name}</h3>
            </div>
        </div>
    )
} 