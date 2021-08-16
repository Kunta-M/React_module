

import {useEffect, useState} from "react";
import {getComments} from "../../services/user.fetch.service";
import Comment from "../comment/Comment";

export default function Comments() {

  let [comments, setComments] = useState([]);
  let [comment, setComment] = useState(null);

  useEffect((id) =>{
    getComments(id).then(value => setComments(value))
  }, []);

  const commentsDetails = (id) => {
    let chosenComment = comments.find(value => value.id === id);
    setComment(chosenComment)
  }

  return (
    <div>
      {
        comments.map(value => <Comment item={value} key={value.id} commentsDetails={commentsDetails}/>)
      }

      {
        comment && <div>{comment.body}</div>
      }

    </div>
  );
}