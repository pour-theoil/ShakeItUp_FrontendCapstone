const url = "http://localhost:8088"

export const getRandomId = (typeId) => {
    return fetch(`${url}/ingredients?typeId=${typeId}`)
      .then(result => result.json())
      .then(array => {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomingredient = array[randomIndex];
        return randomingredient;
    });
  } 