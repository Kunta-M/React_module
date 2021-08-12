function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
}

function getUser(id) {
    return fetch('https://jsonplaceholder.typicode.com/users' + id)
        .then(value => value.json());
}

function getPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json())
}

function getComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/` + postId + '/comments')
        .then(value => value.json())
}

export {getUsers, getUser, getPosts, getComments};