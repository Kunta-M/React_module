// IP с дома 91.201.233.14
// IP в офисе 192.168.1.253
//
//
// Є наступні лінки, та дії закріплені за ними
// /cars - отримати всі автівки та вивести їх
// /create-car - сторінка з формою створення нового авто
// Додатково
// /update-car - сторінка з двома формами - 1 форма з select, в якій  можна обрати яку автівку редагувати. Після вибору
// поточні данні про авто з'являються на другій формі, пілся редагування яких і відправки автівка оновлюється на сервері.

import './App.css'
import{
BrowserRouter as Router,
Route,
Link,
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
