import {useEffect, useState} from "react";
import {getPosts} from "../../services/users.service";
import Posts from "./Posts";

export default function User({item}) {

    let [posts, setPosts] = useState([]);

    useEffect(()=>{
            getPosts(item.id).then(value => setPosts([...value]))
    }, [item.id]);

  return (
    <div>

        <Posts items={posts}/>

    </div>
  );
}