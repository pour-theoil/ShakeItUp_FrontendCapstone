import React, { useEffect, useState } from 'react'
import { getAllMenus, deleteMenu } from '../../modules/MenuManager'
import { useHistory } from 'react-router-dom'
import { MenuEntry } from './MenuCard'

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
        console.log(time)
        let myDate = new Date(time)
        let shortend = myDate.toLocaleDateString()
        return shortend;
    }

    useEffect(() => {
        getMenus()
    },[])

    return (
        <>
            <section className="menus">
                <div className="menus-card">
                    {menus.map(menu => <MenuEntry   menu={menu}
                                                    key={menu.id}
                                                    timeconverter={timeconverter} />)}
                </div>
                <div className="create-event">
                    <button type="button"
                            className="article-btn"
                            onClick={() => {history.push('/menus/create')}}> + Menu</button>
                </div>
            </section>
        </>
    )
}