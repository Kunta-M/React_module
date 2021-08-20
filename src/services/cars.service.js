const url = 'http://195.72.146.25/api/v1/cars'

const saveCars = (car) =>{
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
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

const editCar = (car, id) =>{
    fetch(url + '/' + id, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export {saveCars, getCars, deleteCarsService, editCar};

