import {useEffect, useState} from "react";
import User from "./User";
import {getUsers} from "../services/api.service";
import {Route} from "react-router-dom";
import UserDetails from "./UserDetails";

export default function Users(props) {

  let {match:{url}, history} = props;

  let [users, setUsers] = useState([]);
  useEffect( ()=>{
    async function fetchData() {
      let usersList = await getUsers();
      setUsers([...usersList]);
    }

    fetchData();
    }, []);

  return (
    <div>
      {
        users.map(value => <User item={value} key={value.id} history={history}/>)
      }

      <Route path={`${url}/:id`} render={(props)=>{
        return <UserDetails {...props}/>
      }}/>

    </div>
  );
}