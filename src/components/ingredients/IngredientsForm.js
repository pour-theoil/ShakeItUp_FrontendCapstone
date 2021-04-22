import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { addIngredient, getAllTypes } from '../../modules/IngredientManager'

export const IngredientEntry = () => {
    const [ingredient, setIngredient] = useState({
        name: "",
        typeId: 0,
        alcoholic: false,
        abv: ""
    })
    const [types, setTypes] = useState([]) 
    
    const getTypes = () => {
        getAllTypes()
        .then(type => setTypes(type))
    }

    const history = useHistory()

    const handleInputChange = (event) => {
        const newIngredient = {...ingredient}
        let selectedValue = event.target.selectedValue
        newIngredient[event.target.id] = selectedValue
        console.log(newIngredient)
        setIngredient(newIngredient)
    }

    const handleSaveEvent = (click) => {
        click.preventDefault()
        if (ingredient.name === "" || ingredient.typeId === 0) {
            window.alert("Please fill in all fields")
        } else {
            addIngredient(ingredient)
            .then(()=> history.push('/ingredients'))
        }

    }
    

    const handleCancelSave = (click) => {
        history.push('/ingredients')
    }

    useEffect(() => {
        getTypes()
    },[])

    return (
        <form className="ingredientform">
            <h3 className="ingredientform-name"> New Ingredient</h3>
            <fieldset>
                <div className="ingredientform-group">
                    <label htmlFor="name">Ingredient Name</label>
                    <input  type="text" 
                            id="name" 
                            onChange={handleInputChange} 
                            autoFocus 
                            required
                            className="form-control"
                            placeholder="Name"
                            value={ingredient.name} />
                </div>
                <div className="ingredientform-group">   
                    <label htmlFor="typeId">Ingredient Type</label>
                    <select value={ingredient.typeId} name="typeId" id="typeId" onChange={handleInputChange} className="form-control" >
						<option value="0">Type</option>
						{types.map(t => (
							<option key={t.id} value={t.id}>
								{t.name}
							</option>
						))}
					</select>
                </div>
                <div className="ingredientform-group">  
                    <label htmlFor="abv">ABV of Ingredient</label>
                    <input  type="text" 
                            id="abv" 
                            required
                            onChange={handleInputChange} 
                            className="form-control"
                            placeholder="abv"
                            value={ingredient.abv} />
                            <label htmlFor="abv">%</label>
                </div>
                </fieldset>
                <button className="article-btn"
				onClick={handleSaveEvent}>
				Save Entry
            </button>
            <button className="article-btn"
				onClick={handleCancelSave}>
				Cancel
            </button>
        </form>
    )
}