const url = "http://localhost:8088"

export const deleteCockail = (id) => {
    return fetch(`${url}/cocktail/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
}