import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { updateIngredient, getIngredientById } from '../../modules/IngredientManager'
import { getAllTypes } from '../../modules/IngredientManager'
import { Form, Button, Row, Container } from "react-bootstrap";

export const EditIngredientForm = () => {
    const [ingredient, setIngredient] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [types, setTypes] = useState([])

    const { ingredientId } = useParams()
    const history = useHistory()

    const getTypes = () => {
        getAllTypes()
        .then(type => setTypes(type))
    }

    const handleFieldChange = evt => {
        const stateToChange = { ...ingredient}
        stateToChange[evt.target.id] = evt.target.value;
        setIngredient(stateToChange)
    }

    const updateExistingIngredient = evt => {
        evt.preventDefault()
        setIsLoading(true)
        const editedIngredient = {
            id: ingredientId,
            name: ingredient.name,
            typeId: ingredient.typeId,
            abv: ingredient.abv,
            alcoholic: ingredient.alcoholic
        }
        
        updateIngredient(editedIngredient)
            .then(() => history.push('/ingredients'))
    }

    const handleCancelSave = (click) => {
        click.preventDefault()
        history.push('/ingredients')
    }

    useEffect(() => {
        getTypes()
    },[])

    useEffect(() => {
        getIngredientById(ingredientId)
            .then(ingredient => {
                setIngredient(ingredient)
                setIsLoading(false)
            })
    }, [ingredientId])

    return (
        <Container className="justified-content-center">
            <h2 className="cocktailform-name">Edit Ingredient</h2>

            <Form>
                    <Form.Group >
                        <Form.Label>Ingredient Name:</Form.Label>
                        <Form.Control type="text"
                            id="name"
                            onChange={handleFieldChange}
                            autoFocus
                            required
                            className="form-control"
                            placeholder="Name"
                            value={ingredient.name} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="type">Ingredient Type</Form.Label>
                        <Form.Control as="select" value={ingredient.typeId} name="typeId" id="typeId" onChange={handleFieldChange} className="form-control" >
                            <option value="0">Type</option>
                            {types.map(t => (
                                <option key={t.id} value={t.id}>
                                    {t.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                
                        <Form.Group>
                        <label htmlFor="abv">ABV of Ingredient</label>
                        <input type="text"
                            id="abv"
                            required
                            onChange={handleFieldChange}
                            className="form-control"
                            placeholder="abv"
                            value={ingredient.abv} />
                        <label htmlFor="abv">%</label>
                    </Form.Group>
                
                    <Row>
                    <Button
                        disabled={isLoading}
                        variant="outline-secondary"
                        onClick={updateExistingIngredient}
                    >Submit</Button>
                    <Button 
                        variant="outline-danger"
                        onClick={handleCancelSave}>
                        Cancel
                    </Button>
                    </Row>
                
            </Form>
        </Container>
    )
}