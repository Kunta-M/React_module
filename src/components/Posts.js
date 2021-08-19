import {useEffect, useState} from "react";
import {getPosts} from "../services/users.service";
import Post from "./Post";

export default function Posts({item}) {

    let [posts, setPosts] = useState([]);

    useEffect(() =>{
        getPosts().then(value => setPosts([...value]))
    }, [])
  return (
    <div>
        {
            posts.map(value => <Post item={value} key={value.id}/>)
        }
    </div>
  );
}