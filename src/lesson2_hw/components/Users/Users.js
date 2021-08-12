// 1. Коротко : отримати всіх юзерів з плейсхолдеру, та відтворити на сторіці
//
//
// створити сервіс (user.service.js) роботи  з users сутностями  з jsonplaceholer (getUsers(),getUser(id)).
//     Використати fetch / axios на вибір
// Створити компонент Users
// На  рівні Users, за допомоги відповідного сервісу,  отримати всі данні та вивести їх використовуючи відповідні компоненти
// Створити компонент User який характеризує окремий об'єкт з масиву.
// Ієрархія компонентів :
//     App-Users->User

import {useEffect, useState} from "react";
import User from "../User/User";
import {getUsers} from "../../services/user.axios";
// import {getUsers} from "../../services/user.service";



export default function Users() {

  let [users, setUsers] = useState([]);

  useEffect(() => {
    // getUsers().then(value => setUsers([...value]));
    getUsers().then(({data}) => setUsers([...data]));

  }, []);

  return (
    <div>
        {
            users.map(value => <User item = {value} key = {value.id}/>)
        }
    </div>
  );
}