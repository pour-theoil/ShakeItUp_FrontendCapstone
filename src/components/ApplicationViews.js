import React from 'react'
import { Route } from 'react-router-dom'
import { EditIngredientForm } from './ingredients/IngredientEditForm'
import { IngredientList } from './ingredients/IngredientsList'
import { IngredientEntry } from './ingredients/IngredientsForm'
import { ShakeItUpList } from './shakeitup/ShakeItUpList'

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <ShakeItUpList />
            </Route>

            <Route exact path="/ingredients">
                <IngredientList />
            </Route>

            <Route exact path="/ingredients/:ingredientId(\d+)/edit">
                <EditIngredientForm />
            </Route>

            <Route exact path="/ingredients/:ingredientId(\d+)/edit">
                <EditIngredientForm />
            </Route>
            
            <Route path='/ingredients/create'>
                <IngredientEntry />
            </Route>
        </>
    )
}