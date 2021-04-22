import React from 'react'
import { Link } from 'react-router-dom'

export const MenuEntry = ({menu, timeconverter}) => {
    

    return(
        <>
            <Link to={`/menus/${menu.id}`}>
                <article className="menu">
                    <h2 className="menu-title">{menu.name}</h2>
                    <p className="menu-details">Started on:{timeconverter(menu.date)}</p>
                </article>
            </Link>
        </>
    )
}