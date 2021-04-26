import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export const MenuEntry = ({menu, timeconverter}) => {
    

    return(
        <Card>
            
                <Card.Title>{menu.name}</Card.Title>
                <Card.Subtitle>Started on:{timeconverter(menu.date)}</Card.Subtitle>
                <Link to={`/menus/${menu.id}`}>Details</Link> 
        </Card>
    )
}