const url = "http://localhost:8088"

export const deleteCocktail = (id) => {
    return fetch(`${url}/cocktails/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
}

export const addCocktail = (obj) => {
    return fetch(`${url}/cocktails`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }).then(response => response.json()
    .then(response => {return response}))
}

export const updateCocktail = (obj) => {
    return fetch(`${url}/cocktails/${obj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }).then(response => response.json())
}