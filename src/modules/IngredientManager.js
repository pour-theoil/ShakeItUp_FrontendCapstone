const url = "http://localhost:8088"

export const getAllIngredients = () => {
    return fetch(`${url}/ingredients?_expand=type`)
    .then(response => response.json())
}

export const deleteIngredient = (ingredientId) => {
    return fetch(`${url}/ingredients/${ingredientId}`, {
        method: "DELETE"
    })
    .then(response => response.json())
}

export const getIngredientById = (id) => {
    return fetch(`${url}/ingredients/${id}`)
    .then(response => response.json())
}

export const updateIngredient = (obj) => {
    return fetch(`${url}/ingredients/${obj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }).then(response => response.json())
}

export const addIngredient = (obj) => {
    return fetch(`${url}/ingredients`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }).then(response => response.json())
}

export const getAllTypes = () => {
    return fetch(`${url}/types`)
    .then(response => response.json())
}