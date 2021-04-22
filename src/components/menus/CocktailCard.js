import React from 'react'

export const CocktailCard = ({ cocktail }) => {
    console.log("single", cocktail)

    return(
        <>
                <article className="cocktail">
                    <h2 className="cocktail-name">{cocktail.cocktail.name}</h2>
                    <p className="cocktail-ingredients"></p>
                </article>
        </>
    )
}