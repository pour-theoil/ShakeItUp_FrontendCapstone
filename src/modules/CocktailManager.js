// const url = "http://localhost:8088"
const url = "https://ld-shakeitup.herokuapp.com"

export const getAllCocktails = () => {
    return fetch(`${url}/cocktails`)
    .then(response => response.json())
}

export const getCocktialById = (id) => {
    return fetch(`${url}/cocktails/${id}`)
    .then(response => response.json())
}

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