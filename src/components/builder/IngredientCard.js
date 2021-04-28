import react from 'react'
import { Row } from 'react-bootstrap'
 
export const IngredientCard = ({ingredient}) => {
    return(
        <div>

        <Row className="ingredient-card">
            <h4>{ingredient.ingredient.name}</h4>
        </Row>
        </div>
    )
}