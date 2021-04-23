import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import { BuilderCard } from "./BuilderCard";
import { addCocktail } from '../../modules/CocktailManager'
import { addCocktailIngredient } from '../../modules/BuilderManager'


export const BuilderList = () => {
    const [reload, setReload] = useState(false);
    const [cocktail, setCocktail] = useState({
        name:""
    })
    const history = useHistory()
    //relate to the tpes of ingredients
    const array = [1,2,3,4,5,6]
    const ingredientArray = [array]
    
    // save the cocktail first, then create the many to many relationships with the drink
    const handleSaveCocktail = () => {
        addCocktail(cocktail)
        .then(cocktailobj => {
                setCocktail(cocktailobj)
                ingredientArray.forEach(ingredient => {
                    const cocktailingredients = {
                        cocktailId: cocktailobj.id,
                        ingredientId: ingredient.id
                    }
                    
                    addCocktailIngredient(cocktailingredients)
                })

            }) 
        }

    useEffect(()=> {
        if(cocktail.id) {
            history.push(`/cocktail/${cocktail.id}/add`)
        }
    },[cocktail])

    useEffect(()=> {
        setReload(false)
    },[reload])
    return(
        <>
            <h1>Cocktail Builder</h1>
            {array.map((number,index) => <BuilderCard  
                                                key={index}
                                                index={index}
                                                ingredientArray={ingredientArray}
                                                type={number}
                                                reload={reload}
                                                 />)}
            <button onClick={()=>setReload(true)}>Shake it UP!!! &#x27f3;</button>
            <button onClick={handleSaveCocktail}>Save Your Creation</button>
        </>
    )
}