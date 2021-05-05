import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getAllCocktails, deleteCocktail } from '../../modules/CocktailManager'
import { CocktailCard } from './CocktailCard'
import { Container, Button, Row } from 'react-bootstrap'

export const CocktailList = () => {
    const [cocktails, setCocktails] = useState([])
    const [menu, setMenu] = useState([])
    const history = useHistory()
    const {menuId} = useParams()

    const getCocktails = () => {
        getAllCocktails()
        .then(cocktails => {
            cocktails.sort(function(a, b){
                var x = a.name?.toLowerCase();
                var y = b.name?.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
              })
            setCocktails(cocktails)})
    } 
    console.log(cocktails)

    const deleteSetCocktail = (id) => {
        deleteCocktail(id)
        .then(() => getCocktails())
    }

    const colorArray = ['primary', 'light', 'warning', 'success', 'danger', 'info']

    useEffect(() => {
        getCocktails()
    }, [])
    
    return (
        <>
            <Container className="justified-content-center">
            <h3 className="cocktailform-name">Cocktail List</h3>
                <Container className="cocktails-card">
                    {cocktails.map(cocktail => <CocktailCard   cocktail={cocktail}
                                                                key={cocktail.id}
                                                                />)}
                </Container>
                <Row className="create-event">
                    <Button 
                            variant="primary"
                            className="fixed-button"
                            onClick={() => {history.push('/')}}>+ Cocktail</Button>
                </Row>
            </Container>
        </>
    )
}