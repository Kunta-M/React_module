function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
}

function getPost(userId) {
    return fetch('https://jsonplaceholder.typicode.com/posts' + userId)
        .then(value => value.json());
}

export {getPosts, getPost};