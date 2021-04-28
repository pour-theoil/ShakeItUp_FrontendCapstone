import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import { BuilderCard } from "./BuilderCard";
import { addCocktail } from '../../modules/CocktailManager'
import { addCocktailIngredient } from '../../modules/BuilderManager'
import { getAllTypes } from '../../modules/IngredientManager'
import { Container, Form, Button } from 'react-bootstrap'
import shaker from './emptyshaker.png'

export const BuilderList = () => {
    const [reload, setReload] = useState(false);
    const [cocktail, setCocktail] = useState({
        name: ""
    })
    const history = useHistory()
    //relate to the tpes of ingredients
    const [array, setArray] = useState([])
    const ingredientArray = [array]
    const [shake, setShake] = useState(false)

    const handleInputChange = (event) => {
        const newArray = [...array]
        let selectedValue = event.target.value
        newArray.push(selectedValue)
        newArray.sort()
        newArray.reverse()
        setArray(newArray)
        event.target.value = 0
    }

    const [types, setTypes] = useState([])

    const getTypes = () => {
        getAllTypes()
            .then(type => setTypes(type))
    }

    // save the cocktail first, then create the many to many relationships with the drink
    const handleSaveCocktail = () => {
        addCocktail(cocktail)
            .then(cocktailobj => {
                setCocktail(cocktailobj)
                ingredientArray.forEach(ingredient => {
                    const cocktailingredients = {
                        cocktailId: cocktailobj.id,
                        ingredientId: ingredient.id
                    }

                    addCocktailIngredient(cocktailingredients)
                })

            })
    }

    const handleToggle = () => {
       setShake(true)
    };


    useEffect(() => {
        if (cocktail.id) {
            history.push(`/cocktail/${cocktail.id}/add`)
        }
    }, [cocktail])

    useEffect(() => {
        getTypes()
    }, [])
    
    useEffect(()=>{
        setReload(true)
    },[array])
    

    useEffect(() => {
        setReload(false)
    }, [reload])
    return (
        <Container className="justified-content-center">
            <h2 className="cocktailform-name">Cocktail Builder</h2>
            <Button onClick={() => {
                handleToggle()
                setReload(true)
                                    }}>Shake it UP!!! &#x27f3;</Button>
                <div className={`shakerbox${ shake ? '-active': ""}`} onAnimationEnd={()=>setShake(false)}>
                        <img
                        src={shaker}

                        className="imagetop"
                        alt="React"
                    />
                    <div className="cocktail-shaker" onClick={(event)=>{console.log(event.target.value)}}>
                        <div className="messageBottom shake">

                        {array.map((number, index) => <BuilderCard
                        key={index}
                        index={index}
                        ingredientArray={ingredientArray}
                        type={number}
                        reload={reload}
                        />)}
                        </div>
                    </div>
                </div>
                        <Form.Group>
                            <Form.Control as="select" name="typeId" id="typeId" onChange={handleInputChange} className="form-control" >
                                <option value="0">+ Add Ingredient</option>
                                {types.map(t => (
                                    <option key={t.id} value={t.id}>
                                        {t.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
            
            
            <Button className="savebutton" onClick={handleSaveCocktail}>Save Your Creation</Button>
        </Container>
    )
}