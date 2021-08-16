import {useEffect, useState} from "react";
import {getPostsofUsers, getUsers} from "../../services/user.fetch.service";
import User from "../user/User";
import Post from "../post/Post";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [post, setPost] = useState([]);

    useEffect(() =>{

        getUsers().then(value => setUsers([...value]))
    }, []);

    const getPosts = (item) =>{
        getPostsofUsers(item.id).then(value => setPost([...value]))
    }

    return (
        <div>
            <div>
                {
                    users.map(value => <User item={value} key={value.id} getPosts={getPosts}/>)
                }
            </div>

            <div>
                {
                    post.map(value => <Post item={value} key={value.id}/>)
                }
            </div>
        </div>
    );
}
