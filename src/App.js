import './App.css'
import{
BrowserRouter as Router,
Switch,
Route,
Link,
withRouter
} from "react-router-dom";
import Cars from "./components/Cars";
import CreateCarForm from "./components/CreateCarForm";
import UpdateCarForm from "./components/UpdateCarForm";

function App() {

  return (
      <Router>
        <div>
            <div className={'wrap'}>
                <Link className={'default'} to={'/'}>to default page</Link>
                <Link to={'/cars'}>to cars</Link>
                <Link to={'/create-car'}>to create car</Link>
                <Link to={'/update-car'}>to update car</Link>
            </div>
            <Route path={'/cars'} render={()=>{return <Cars/>}}/>

            <Route path={'/create-car'} render={()=>{return <CreateCarForm/>}}/>

            <Route path={'/update-car'} render={()=>{return <UpdateCarForm/>}}/>

        </div>
      </Router>
  );
}

export default App;
