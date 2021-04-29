import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

export const MenuEntry = ({colorArray, menu, timeconverter}) => {
    const history = useHistory()
    const randomIndex = Math.floor(Math.random() * colorArray.length);

    return(
        <Card className="ingredient-card" bg={colorArray[randomIndex]}>
                <Button onClick={()=>{history.push(`/menus/${menu.id}`)}}>
                <Card.Title>{menu.name}</Card.Title>
                <Card.Subtitle>Started on: {timeconverter(menu.date)}</Card.Subtitle>
                </Button> 
        </Card>
    )
}