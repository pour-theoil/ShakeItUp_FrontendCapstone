import React, { useEffect, useState } from 'react'
import { getAllMenus, deleteMenu } from '../../modules/MenuManager'
import { useHistory } from 'react-router-dom'
import { MenuEntry } from './MenuCard'
import { Container, Button, Row } from 'react-bootstrap'
import './Menu.css'

export const MenuList = () => {
    const [menus, setMenus] = useState([])
    const history = useHistory()

    const getMenus = () => {
        getAllMenus()
        .then(menus => {
            setMenus(menus)
        })
    }

    const timeconverter = (time) => {

        let myDate = new Date(time)
        let shortend = myDate.toLocaleDateString()
        return shortend;
    }

    const colorArray = ['light', 'dark', 'success', 'danger', 'info']


    useEffect(() => {
        getMenus()
    },[])

    return (
        <>
            <Container className="justified-content-center">
            <h2 className="cocktailform-name">Menus</h2>
                <Container>
                    {menus.map(menu => <MenuEntry   menu={menu}
                                                    colorArray={colorArray}
                                                    key={menu.id}
                                                    timeconverter={timeconverter} />)}
                </Container>
                <Row>
                    <Button className="fixed-button"
                            variant="primary"
                            onClick={() => {history.push('/menus/create')}}> + Menu</Button>
                </Row>
            </Container>
        </>
    )
}