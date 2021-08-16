// 1.Отримати всі пости з jsonplaceholder та вивести їх. до кожного поста зробити кнопку при натисканні якої виводиться
// біль детальна інформація про пост в середині Posts компоненти

// 2.Отримати всі коментарі з jsonplaceholder та вивести їх. до кожного поста зробити кнопку при натисканні якої
// виводиться біль детальна інформація про коментар в середині Comments компоненти

import {useEffect, useState} from "react";
import {getPosts} from "../../services/user.fetch.service";
import Post from "../post/Post";

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);

    useEffect(() =>{
      getPosts().then(value => setPosts([...value]))
    }, []);

    const postDetails = (id) => {
       let chosenPost =  posts.find(value => value.id === id);
       setPost(chosenPost)
    }

  return (
    <div>
        <div>
            {
                posts && posts.map(value => <Post item={value} key={value.id} postDetails={postDetails}/>)
            }
        </div>

        <div>
            {
                post && <div>{post.body}</div>
            }
        </div>

    </div>
  );
}