import React, { useEffect, useState } from 'react'
import { getAllIngredients, deleteIngredient} from '../../modules/IngredientManager'
import { useHistory } from 'react-router-dom'
import { IngredientCard } from './IngredientCard'
import { Container, Button, Row } from 'react-bootstrap'
import './ingredients.css'
import "../../scss/_variables.scss"

export const IngredientList = () => {
    const [ ingredients, setIngredients ] = useState([])
    const history = useHistory()

    const getIngredients = () => {
        getAllIngredients()
        .then(ingredients => {
            setIngredients(ingredients)})
    } 

    const deleteSetIngredient = (id) => {
        deleteIngredient(id)
        .then(() => getIngredients())
    }

    useEffect(() => {
        getIngredients()
    }, [])
    
    return (
        <>
            <Container>
            <h3 className="cocktailform-name">Ingredients List</h3>
                <Container>

                    {ingredients.map( ingredient => {
                                               
                                
                                                return (
                                                    <IngredientCard ingredient={ingredient}
                                                                    key={ingredient.id}
                                                                    deleteSetIngredient={deleteSetIngredient}
                                                                     />)}

                                                )
                    }
                </Container>
                <Row className="create-event">
                    <Button type="button"
                            variant="outline-primary"
                            id="addingredient"
                            onClick={() => {history.push('/ingredients/create')}}> + Ingredient</Button>
                </Row>
            </Container>
        </>
    )
}