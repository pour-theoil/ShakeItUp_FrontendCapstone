import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getCocktails, getMenuById, deleteMenuCocktail } from '../../modules/MenuManager'
import { CocktailCard } from './CocktailCard'

export const MenuDetails = () => {
    const [cocktails, setCocktails] = useState([])
    const [menu, setMenu] = useState([])
    const history = useHistory()
    const {menuId} = useParams()

    // get menu details season/notes
    const getSetMenu = () => {
        getMenuById(menuId)
        .then(menuObj => setMenu(menuObj))
    }

    console.log("this is the", menu)

    const removeCocktailFromMenu = (id) => {
        deleteMenuCocktail(id)
        .then(() => getMenuCocktails())
    }
    
    //get cocktails associated with that menu
    const getMenuCocktails = () => {
        getCocktails(menuId)
        .then(cocktail => setCocktails(cocktail))
    }
    


    useEffect(() => {
            getSetMenu()
    },[cocktails])

    useEffect(() => {
        getMenuCocktails()
    },[])

    
    return (
        <>
              <section className="cocktails">
                <div>
                    <h2 className="menu-title">{menu[0]?.name}</h2>
                    <p>{menu[0]?.season.name}</p>
                </div>
                <div className="cocktails-card">
                    {cocktails.map(cocktail => <CocktailCard   cocktail={cocktail}
                                                                key={cocktail.id}
                                                                removeCocktailFromMenu={removeCocktailFromMenu}/>)}
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