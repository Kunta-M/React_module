let url = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = (id) => fetch(url)
    .then(value => value.json())

export {getPosts};