import React from 'react'
import { Route } from 'react-router-dom'
import { EditIngredientForm } from './ingredients/IngredientEditForm'
import { IngredientList } from './ingredients/IngredientsList'
import { IngredientEntry } from './ingredients/IngredientsForm'
import { BuilderList } from './builder/BuilderList'
import { MenuList } from './menus/MenuList'
import { MenuEntry } from './menus/MenuForm'
import { MenuDetails } from './menus/MenuDetails'
import { EditCocktailForm } from './builder/CocktailForm' 
import { Container } from 'react-bootstrap'

export const ApplicationViews = () => {
    return (
        <Container>
            <Route exact path="/">
                <BuilderList />
            </Route>

            <Route exact path="/cocktail/:cocktailId(\d+)/add">
                <EditCocktailForm />
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
                <MenuDetails />
            </Route>

            <Route path='/menus/create'>
                <MenuEntry />
            </Route>

        </Container>
    )
}