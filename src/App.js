import './App.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUserWithThunk, getUsersWithThunk} from "./services/api.services";

export default function App() {

    let state = useSelector(state => state)
    let dispatch = useDispatch();

useEffect(() =>{
    dispatch(getUsersWithThunk());
}, []);

const onClickSaveUser = (e) =>{
    e.preventDefault();
    dispatch(addUserWithThunk({name: 'Mary Kunta'}))
}

    return (
        <div>
            <button onClick={onClickSaveUser}>Save user</button>
            <hr/>

            {
                state.users.map(value => <div key={value.id}>{value.id}. {value.name}</div>)
            }
        </div>
    );
}
