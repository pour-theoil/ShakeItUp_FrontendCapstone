import React, { useEffect, useState } from "react";
import { getRandomId } from '../../modules/BuilderManager'
import './IngredientCard.css'

export const BuilderCard = ({type, reload, ingredientArray, index}) => {
    const [ingredient, setIngredient] = useState({})
    const [locked, setLocked] = useState(true)
    
    //Generate a random ingredient based on the type chosen
    const newIngredient = () => {
        if (locked) {
            getRandomId(type).then(setIngredient)
        }
    }
    //Array of ingredients to be saved.
    const updateIngredientArray = () => {
        ingredientArray[index] = ingredient
    }

    console.log(ingredient)
    const handleInputChange = () => {
        let newlocked = locked
        if (newlocked) {
            newlocked = false
        } else newlocked = true
        setLocked(newlocked)
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
        <div className="ingredient-card">
            <div>
                <h3>{ingredient?.name}</h3>
                <h6>({ingredient.type?.name})</h6>
                <input className="inplock" onClick={handleInputChange} type="checkbox"/>
                            <label className="btn-lock" htmlFor="inplock">
                            <svg width="20" height="20" viewBox="0 0 50 50">
                                <path className="lockb" d="M27 27C27 34.1797 21.1797 40 14 40C6.8203 40 1 34.1797 1 27C1 19.8203 6.8203 14 14 14C21.1797 14 27 19.8203 27 27ZM15.6298 26.5191C16.4544 25.9845 17 25.056 17 24C17 22.3431 15.6569 21 14 21C12.3431 21 11 22.3431 11 24C11 25.056 11.5456 25.9845 12.3702 26.5191L11 32H17L15.6298 26.5191Z"></path>
                                <path className="lock" d="M6 21V10C6 5.58172 9.58172 2 14 2V2C18.4183 2 22 5.58172 22 10V21"></path>
                                <path className="bling" d="M29 20L31 22"></path>
                                <path className="bling" d="M31.5 15H34.5"></path>
                                <path className="bling" d="M29 10L31 8"></path>
                            </svg>
                </label>
            </div>
    
        </div>
    )
} 