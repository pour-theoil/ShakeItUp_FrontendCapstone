import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { updateIngredient, getIngredientById } from '../../modules/IngredientManager'
import { getAllTypes } from '../../modules/IngredientManager'
import { Form, Button, Col, Container, Row } from "react-bootstrap";

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
            <h3 className="cocktailform-name">Edit Ingredient</h3>

            <Form>
                    <Form.Group as={Row}>
                        <Form.Label column xs={6}>Ingredient Name:</Form.Label>
                        <Col xs={6}>
                        <Form.Control type="text"
                            id="name"
                            onChange={handleFieldChange}
                            autoFocus
                            required
                            className="form-control"
                            placeholder="Name"
                            defaultValue={ingredient.name} />
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column xs={6}>Ingredient Type:</Form.Label>
                        <Col xs={6}>
                        <Form.Control as="select" value={ingredient.typeId} name="typeId" onChange={handleFieldChange} className="form-control" >
                            {types.map(t => (
                                <option key={t.id} value={t.id}>
                                    {t.name}
                                </option>
                            ))}
                        </Form.Control>
                        </Col>
                    </Form.Group>
                
                    <Form.Group as={Row}>
                        <Form.Label column xs={6}>ABV of Ingredient:</Form.Label>
                        <Col xs={6}>
                        <Form.Control type="text"
                            id="abv"
                            required
                            onChange={handleFieldChange}
                            className="form-control"
                            placeholder="abv"
                            defaultValue={ingredient.abv}>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                </Form>
                <Button className="article-btn"
                onClick={updateExistingIngredient}>
                Update Ingredient
            </Button>
            <Button className="article-btn"
                variant="warning"
                onClick={handleCancelSave}>
                Cancel
            </Button>
                
        </Container>
    )
}