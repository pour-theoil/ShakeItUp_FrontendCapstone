import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getCocktails } from '../../modules/MenuManager'
import { CocktailCard } from './CocktailCard'

export const MenuDetails = () => {
    const [cocktails, setCocktails] = useState([])
    const history = useHistory()
    const {menuId} = useParams()

    const getMenuCocktails = () => {
        getCocktails(menuId)
        .then(cocktail => setCocktails(cocktail))
    }
    console.log("cocktails?", cocktails)
    
    useEffect(() =>{
        getMenuCocktails()
    },[])
    return (
        <>
              <section className="cocktails">
                <div className="cocktails-card">
                    {cocktails.map(cocktail => <CocktailCard   cocktail={cocktail}
                                                    key={cocktail.id} />)}
                </div>
                <div className="create-event">
                    <button type="button"
                            className="article-btn"
                            onClick={() => {history.push('/')}}> + Cocktail</button>
                </div>
            </section>
        </>
    )
}