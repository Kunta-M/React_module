import {useEffect, useState} from "react";
import './UserSelect.css'
import {getUsers} from "../../services/users.service";
import Posts from "./Posts";
import User from "./User";

export default function UsersSelect() {

    let [users, setUsers] = useState([]);

    useEffect(() =>{
        getUsers().then(value => setUsers([...value]))
    }, [])

    return (
    <div>
        {
            users.map(user => <User item={user} key={user.id}/>)
        }
    </div>
  );
}