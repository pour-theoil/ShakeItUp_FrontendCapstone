import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export const MenuEntry = ({colorArray, menu, timeconverter}) => {
    const randomIndex = Math.floor(Math.random() * colorArray.length);

    return(
        <Card className="ingredient-card" bg={colorArray[randomIndex]}>
                <Card.Title>{menu.name}</Card.Title>
                <Card.Subtitle>Started on:{timeconverter(menu.date)}</Card.Subtitle>
                <Link to={`/menus/${menu.id}`}>Details</Link> 
        </Card>
    )
}