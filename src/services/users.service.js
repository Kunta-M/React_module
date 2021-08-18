const url = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () =>{
    return fetch(url)
        .then(value => value.json());
}

const getPosts = (id) =>{
    return fetch(url + '/' + id + '/posts')
        .then(value => value.json())
}
export {getUsers, getPosts}

