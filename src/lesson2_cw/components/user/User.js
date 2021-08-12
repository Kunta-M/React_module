import {useEffect, useState} from "react";
import {getPosts} from "../../../services/users.service";
import Post from "../post/Post";

export default function User({item}) {

    let [posts, setPosts] = useState();
    useEffect(() =>{
        getPosts(item.id).then(value => setPosts([...value]))
    }, [item.id]);

  return (
    <div>

      <h4>{item.id} {item.name}</h4>
        {posts && posts.map(value => <Post key={value.id} posts={value}/>)}
    </div>
  );
}