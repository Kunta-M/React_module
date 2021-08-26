import './App.css'
import {useEffect, useReducer} from "react";
import reducer from "./reducers/reducer";
import Users from "./components/Users";
import {getComments, getPostsOfUser, getUsers} from "./services/users.api.service";

export default function App() {
    const initialValue = {users: [], posts: [], comments: []}
    let [{users, posts, comments}, dispatch] = useReducer(reducer, initialValue);
    const getOfUsers = async () => {
        let users = await getUsers();
        dispatch({type: 'GET_USERS', payload: users});
    }

    useEffect(() => {
        getOfUsers();
    }, []);

    const postsOfUser = async (id) => {
        const res = await getPostsOfUser(id);
        dispatch({type: 'GET_POSTS', payload: res});
    }

    const commentsToPost = async (id) => {
        const comment = await getComments(id);
        dispatch({type: 'GET_COMMENTS', payload: comment})
    }

    return (
        <div>
            <Users items={users}
                   postsOfUser={postsOfUser} posts={posts}
                   commentsToPost={commentsToPost} comments={comments}/>
        </div>
    );
}
