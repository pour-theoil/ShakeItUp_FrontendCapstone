import React, { useEffect, useState } from "react";
import { getRandomId } from '../../modules/BuilderManager'
import './IngredientCard.css'
import '../../scss/_variables.scss'
import { Card, Col, Form, Row } from 'react-bootstrap'


export const BuilderCard = ({type, reload, setIngredientArray, ingredientArray, index, colorArray}) => {
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
        let arraytemp = [...ingredientArray]
        arraytemp[index] = ingredient
        setIngredientArray(arraytemp)
        console.log(arraytemp)
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
            <Card bg={colorArray[type-1]} className="card-margin">
                    <Col>
                        <Card.Title>{ingredient?.name}</Card.Title>
                        <Card.Subtitle>({ingredient.type?.name})</Card.Subtitle>
                        
                    </Col> 
                    <Form.Control type="checkbox" onClick={handleInputChange} hidden></Form.Control>
            </Card>
        </>
        )
} 