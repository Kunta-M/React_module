// Є дві лінки
// /users
// /posts
//
// /users - робить все те, що було на занятті останнім способом (через кнопку та ддатковий запит на сервер)
//
// /posts
// Отримує posts з jsonplaceholder, виводить їх всі.
//     Біля кожного поста зробити лінку (не кнопку) яка буде вести на детальну інформацію поста. Детальну інформацію
// отримувати через history.state

import './App.css'
import{
BrowserRouter as Router,
Route,
Link
} from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/Posts";

function App() {

  return (
      <Router>

        <div>

            <div className={'wrap'}>
            <Link to={'/users'}>to users</Link>
            <Link to={'/posts'}>to posts</Link>
            </div>

            <div>
                <Route path={'/users'} component={Users}/>

                <Route path={'/posts'} component={Posts}/>
            </div>

        </div>
      </Router>
  );
}

export default App;
