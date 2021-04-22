import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { addMenu, getAllSeasons } from '../../modules/MenuManager'

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
        // if (event.target.id.includes("Id")) {
		// 	selectedValue = parseInt(selectedValue)
		// }
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
        <form className="menuform">
            <h3 className="menuform-name"> New Menu</h3>
            <fieldset>
                <div className="menuform-group">
                    <label htmlFor="name">Menu Name</label>
                    <input  type="text" 
                            id="name" 
                            onChange={handleInputChange} 
                            autoFocus 
                            required
                            className="form-control"
                            placeholder="Name"
                            value={menu.name} />
                </div>
                <div className="menuform-group">   
                    <label htmlFor="seasonId">Menu Season</label>
                    <select value={menu.seasonId} name="seasonId" id="seasonId" onChange={handleInputChange} className="form-control" >
						<option value="0">Season</option>
						{seasons.map(t => (
							<option key={t.id} value={t.id}>
								{t.name}
							</option>
						))}
					</select>
                </div>
                <div className="menuform-group">  
                    <label htmlFor="notes">Notes</label>
                    <input  type="text" 
                            id="notes" 
                            required
                            onChange={handleInputChange} 
                            className="form-control"
                            placeholder="notes"
                            value={menu.notes} />
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