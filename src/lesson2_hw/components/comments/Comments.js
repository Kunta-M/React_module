// 3. Коротко : отримати всі пости з плейсхолдеру, та відтворити на сторіці
//
//
// створити сервіс (comment.service.js) роботи  з comment сутностями  з jsonplaceholer (getComments(),getComment(id)).
//     Використати fetch / axios на вибір
// Створити компонент Comments
// На  рівні Comment, за допомоги відповідного сервісу,  отримати всі данні та вивести їх використовуючи відповідні компоненти
// Створити компонент Comment який характеризує окремий об'єкт з масиву.
// Ієрархія компонентів :
//     App-Comments->Comment

import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.service";
import Comment from "../comment/Comment";

export default function Comments() {

  let [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then(value => setComments([...value]));
  }, [])

  return (
    <div>

      {
        comments.map(value => <Comment item={value} key={value.id}/>)
      }

    </div>
  );
}