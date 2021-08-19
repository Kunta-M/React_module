import {useEffect, useState} from "react";
import {getComments} from "../services/users.service";
import Comment from "./Comment";
import{withRouter} from "react-router-dom";

export default function Comments() {

    let [comments, setComments] = useState([]);

    useEffect(() =>{
        getComments().then(value => setComments([...value]))
    }, [])

  return (
    <div>
        {
            comments.map(value => <Comment item={value} key={value.id}/>)
        }
    </div>
  );
}