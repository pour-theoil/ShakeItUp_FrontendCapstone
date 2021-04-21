import React from 'react'
import { Route } from 'react-router-dom'
import { ShakeItUpList } from './shakeitup/ShakeItUpList'

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/">
                <ShakeItUpList />
            </Route>
        </>
    )
}