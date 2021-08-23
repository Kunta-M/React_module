const url = 'http://91.201.233.14/api/v1/cars'

const saveCars = (car) =>{
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

const getCars = () =>{
    return fetch(url)
        .then(value => value.json());
}

const deleteCarsService = (id) => {
    return fetch(url + '/' +id , {
        method: 'DELETE',
    })
}

const editCarService = (id, {model, price, year}) =>{
    fetch(url + '/' + id, {
        method: 'PUT',
        body: JSON.stringify({model, price, year}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

export {saveCars, getCars, deleteCarsService, editCarService};

