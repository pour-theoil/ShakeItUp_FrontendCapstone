import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Button } from 'react-bootstrap'

export const IngredientCard = ({colorArray, ingredient, deleteSetIngredient}) => {
    
    return(
        <>
            <Card className="ingredient-card" bg={colorArray[ingredient.typeId-1]}>
                <Row>
                    <Col xs={8}>
                        <Card.Title>{ingredient.name}</Card.Title>
                        <Card.Subtitle>{ingredient.categoryId}</Card.Subtitle>
                    </Col>
                    <Col>
                        <Link to={`/ingredients/${ingredient.id}/edit`}><Button variant="outline-secondary" size="sm" block>Edit</Button></Link>
                        <Button variant="outline-dark" onClick={() => deleteSetIngredient(ingredient.id)} size="sm" block>Delete</Button>
                    </Col>
                </Row>
            </Card>
        </>
    )
}