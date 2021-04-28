import React, { useEffect, useState } from "react";
import { getRandomId } from '../../modules/BuilderManager'
import './IngredientCard.css'
import { Card, Col, Form, Row } from 'react-bootstrap'


export const BuilderCard = ({type, reload, ingredientArray, index}) => {
    const [ingredient, setIngredient] = useState({})
    const [locked, setLocked] = useState(true)
    
    //Generate a random ingredient based on the type chosen
    const newIngredient = () => {
        if (locked) {
            getRandomId(type).then(setIngredient)
        }
    }
    //Array of ingredients to be saved.
    const updateIngredientArray = () => {
        ingredientArray[index] = ingredient
    }

    
    const handleInputChange = () => {
        let newlocked = locked
        if (newlocked) {
            newlocked = false
        } else newlocked = true
        setLocked(newlocked)
    }
    
    useEffect(() => {
        if(ingredient.id) {
            updateIngredientArray()
        } 
    },[ingredient, reload])

    useEffect(() => {
        if (reload) {
            newIngredient()
        }
    },[reload])


    return (
        <>
            <Card className="card-margin">
                
                    <Col>
                        <Card.Title>{ingredient?.name}</Card.Title>
                        <Card.Subtitle>({ingredient.type?.name})</Card.Subtitle>
                    </Col>
            {/* <Form.Check type="radio" className="inplock" onClick={handleInputChange} /> */}
                 
            </Card>
        </>
        )
} 