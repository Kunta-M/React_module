import {useEffect, useState} from "react";
import {getPosts} from "../../services/users.service";
import Posts from "./Posts";

export default function User({item}) {

    let [post, setPost] = useState([]);

    useEffect(()=>{
        getPosts(item.id).then(value => setPost([...value]))
    }, [item.id]);

  return (
    <div>

        <Posts items={post}/>

    </div>
  );
}