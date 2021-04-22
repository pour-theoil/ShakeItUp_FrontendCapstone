import React from 'react'

export const CocktailCard = ({ cocktail, removeCocktailFromMenu }) => {
    return(
        <>
                <article className="cocktail">
                    <h2 className="cocktail-name">{cocktail.cocktail.name}</h2>
                    <p className="cocktail-ingredients"></p>
                </article>
                <button type="button" className="article-btn"onClick={() => removeCocktailFromMenu(cocktail.id)}>Delete</button>
        </>
    )
}