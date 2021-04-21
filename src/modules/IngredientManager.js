const url = "http://localhost:8088"

export const getAllIngredients = () => {
    return fetch(`${url}/ingredients`)
    .then(response => response.json())
}

export const deleteIngredient = (ingredientId) => {
    return fetch(`${url}/ingredients/${ingredientId}`, {
        method: "DELETE"
    })
    .then(response => response.json())
}

export const getIngredientById = (id) => {
    return fetch(`${url}/ingredient/${id}`)
    .then(response => response.json())
}

export const updateIngredient = (obj) => {
    return fetch(`${url}/ingredient/${obj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }).then(response => response.json())
}