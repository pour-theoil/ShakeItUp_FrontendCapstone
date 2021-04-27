import React, { useEffect, useState } from 'react'
import { getAllIngredients, deleteIngredient} from '../../modules/IngredientManager'
import { useHistory } from 'react-router-dom'
import { IngredientCard } from './IngredientCard'
import { Container, Button, Row } from 'react-bootstrap'
import './ingredients.css'

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

    const colorArray = ['Secondary', 'Success', 'Danger', 'Warning', 'Info']

	let colorCount = 0;

	const cyleBackgroundColor = () => {
		const variant = colorArray[colorCount];
		colorCount < colorArray.length - 1 ? colorCount++ : colorCount = 0;
		return variant.toLowerCase()
	}
    
    return (
        <>
            <Container>
                <Container>
                    {ingredients.map( ingredient => {
                                                const mybackgroun = cyleBackgroundColor()
                                                return (
                                                    <IngredientCard ingredient={ingredient}
                                                                    bgcolor={mybackgroun}
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