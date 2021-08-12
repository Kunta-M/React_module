import {useEffect, useState} from "react";
import {getComments} from "../../../services/users.service";
import Comment from "../comment/Comment";

export default function Post({posts: {title,id}}) {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(id).then(value => setComments(value));
    },[id]);

  return (
    <div>
        Posts of users:
        <ul>
            <li>{title}</li>
        </ul>

        {comments && comments.map(value => <Comment item = {value} key = {value.id}/>)}

    </div>
  );
}