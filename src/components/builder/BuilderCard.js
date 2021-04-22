import React, { useEffect, useState } from "react";
import { getRandomId } from '../../modules/BuilderManager'

export const BuilderCard = ({type, reload}) => {
    const [ingredient, setIngredient] = useState({})
    const newIngredient = () => {
        getRandomId(type).then(setIngredient)
    }
    useEffect(() => {
        newIngredient()
    },[reload])
    return (
        <div className="ingredientcard">
            <div>
                <h3>{ingredient?.name}</h3>
            </div>
        </div>
    )
}