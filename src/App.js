// Є три лінки
// /users-page
// /posts-page
// /comments-page
// При кліку на відповідну лінку відбувається перехід на відповідний компонент,
//     який дістає з jsonplaceholder інформацію про відповідні стуності, та виводить їх повний список

import './App.css'
import{
BrowserRouter as Router,
Switch,
Route,
Link,
withRouter
} from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {

  return (
      <Router>
        <div>
            <div className={'wrap'}>
                <Link to={'/'}>to default page</Link>
                <Link to={'/users-page'}>to users</Link>
                <Link to={'/posts-page'}>to posts</Link>
                <Link to={'/comments-page'}>to comments</Link>

            </div>
                <Route path={'/users-page'} render={()=>{
                    return <Users/>
                }}/>

                <Route path={'/posts-page'} render={()=>{
                    return <Posts/>
                }}/>

                <Route path={'/comments-page'} component={Comments}/>
        </div>
      </Router>
  );
}

export default App;
