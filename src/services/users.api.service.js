let url = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => fetch(url)
    .then(value => value.json())

const getPostsOfUser = (id) => fetch(url + '/' + id + '/posts')
    .then(value => value.json());

const getComments = (id) => fetch('https://jsonplaceholder.typicode.com/posts' + '/' + id + '/comments')
    .then(value => value.json());

export {getUsers, getPostsOfUser, getComments};