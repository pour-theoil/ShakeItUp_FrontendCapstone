import react from 'react'

export const IngredientCard = ({ingredient}) => {
    return(
        <div className="ingredient-card">
            <h4>{ingredient.ingredient.name}</h4>
        </div>
    )
}