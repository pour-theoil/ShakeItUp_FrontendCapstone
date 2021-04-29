import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { addMenu, getAllSeasons } from '../../modules/MenuManager'
import { Form, Button, Row, Container } from "react-bootstrap";

export const MenuEntry = () => {
    const [menu, setMenu] = useState({
        name: "",
        seasonId: 0,
        Notes: "", 
        date: Date.now()
    })

    const [seasons, setSeasons] = useState([]) 
    
    const getSeasons = () => {
        getAllSeasons()
        .then(type => setSeasons(type))
    }

    const history = useHistory()

    const handleInputChange = (event) => {
        const newMenu = {...menu}
        let selectedValue = event.target.value
        newMenu[event.target.id] = selectedValue
        setMenu(newMenu)
    }

    const handleSaveEvent = (click) => {
        click.preventDefault()
        if (menu.name === "" || menu.seasonId === 0) {
            window.alert("Please fill in all fields")
        } else {
            addMenu(menu)
            .then(()=> history.push('/menus'))
        }

    }
    

    const handleCancelSave = (click) => {
        click.preventDefault()
        history.push('/menus')
    }

    useEffect(() => {
        getSeasons()
    },[])

    return (
        <Container className="justified-content-center">
            <h3 className="cocktailform-name"> New Menu</h3>
            <Form>
                <Form.Group>
                    <Form.Label>Menu Name</Form.Label>
                    <Form.Control  type="text" 
                            id="name" 
                            onChange={handleInputChange} 
                            autoFocus 
                            required
                            className="form-control"
                            placeholder="Name"
                            value={menu.name} />
                </Form.Group>
                <Form.Group>   
                    <Form.Label>Menu Season</Form.Label>
                    <Form.Control as="select" value={menu.seasonId} name="seasonId" id="seasonId" onChange={handleInputChange} className="form-control" >
						<option value="0">Season</option>
						{seasons.map(t => (
							<option key={t.id} value={t.id}>
								{t.name}
							</option>
						))}
					</Form.Control>
                </Form.Group>
                <Form.Group>  
                    <Form.Label>Notes</Form.Label>
                    <Form.Control  type="text" 
                            id="notes" 
                            required
                            onChange={handleInputChange} 
                            className="form-control"
                            placeholder="notes"
                            value={menu.notes} />
                </Form.Group>
                </Form>
                <Button className="article-btn"
				onClick={handleSaveEvent}>
				Save Entry
                </Button>
                <Button className="article-btn"
				onClick={handleCancelSave}>
				Cancel
                </Button>
        </Container>
    )
}