import React from 'react'
import { Route } from 'react-router-dom'
import { EditIngredientForm } from './ingredients/IngredientEditForm'
import { IngredientList } from './ingredients/IngredientsList'
import { IngredientEntry } from './ingredients/IngredientsForm'
import { ShakeItUpList } from './shakeitup/ShakeItUpList'
import { MenuList } from './menus/MenuList'
import { MenuEntry } from './menus/MenuForm'

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

            <Route path='/ingredients/create'>
                <IngredientEntry />
            </Route>
            
            <Route exact path='/menus'>
                <MenuList />
            </Route>

            <Route exact path="/menus/:menuId(\d+)">
                
            </Route>

            <Route path='/menus/create'>
                <MenuEntry />
            </Route>

        </>
    )
}