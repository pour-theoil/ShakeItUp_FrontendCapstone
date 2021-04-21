import React from 'react'
import { Route } from 'react-router-dom'
import { IngredientList } from './ingredients/IngredientsList'
import { ShakeItUpList } from './shakeitup/ShakeItUpList'

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/">
                <ShakeItUpList />
            </Route>
            <Route path="/ingredients">
                <IngredientList />
            </Route>
        </>
    )
}