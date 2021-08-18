import {useEffect, useState} from "react";
import './UserSelect.css'
import {getPosts, getUsers} from "../../services/users.service";
import Posts from "./Posts";
import User from "./User";

export default function UsersSelect({getPosts, item}) {

    let [users, setUsers] = useState([]);

    useEffect(() =>{
        getUsers().then(value => setUsers([...value]))
    }, [])


    return (
    <div>
        <form>
            <select onClick={}>
                {
                    users.map(user => <option value={user.id} key={user.id}>{user.name}</option>)
                }
            </select>
        </form>

    </div>
  );
}