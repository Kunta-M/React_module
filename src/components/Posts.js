import {useEffect, useState} from "react";
import {getPosts} from "../services/api.service";
import {Route} from "react-router-dom";
import PostsDetails from "./PostsDetails";
import Post from "./Post";

export default function Posts(props) {

  let {match:{url}} = props

  let [posts, setPosts] = useState([]);
  useEffect(() =>{
    async function fetchData() {
      let postsList = await getPosts();
      setPosts([...postsList]);
    }
    fetchData();
  }, []);

  return (
    <div>
      {
        posts.map(value => <Post item={value} key={value.id}/>)
      }

      <Route path={`${url}/:id`} render={(props)=>{
        return <PostsDetails {...props}/>
      }}/>

    </div>
  );
}