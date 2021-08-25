import {useEffect, useState} from "react";
import {getUser} from "../services/api.service";

export default function UserDetails({match:{params:{id}}}) {

  let [user, setUser] = useState({});
  useEffect(() =>{
    getUser(id).then(value => setUser({...value}))
  }, [id]);

  return (
      <div>

        <p>
          {user.id}. {user.name}
          <br/>Email: {user.email}
          <br/>Phone: {user.phone}
        </p>

      </div>
  );
}