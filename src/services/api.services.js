import {addUser, loadUsers} from "../redux/actions/actionCreators";

const url = 'https://jsonplaceholder.typicode.com/users'

const getUsersWithThunk = () => async (dispatch) => {
    let response = await (await fetch(url)).json();
    dispatch(loadUsers(response));
}

const addUserWithThunk = (payload) => async (dispatch) => {
    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({name: payload.name}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    let saveUser = await response.json();
    dispatch(addUser(saveUser))
}

export {getUsersWithThunk, addUserWithThunk}