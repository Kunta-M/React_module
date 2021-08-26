// стоврити об'єкт {a:0,b:0,c:0}
// Стоврити 6 кнопок.
//     по дві на кожен з параметрів об'єкту.
// одна кнопка збільшує значення , інша зменшує
// логіку реалізувати через reducer

import './App.css'
import {useReducer} from "react";
import reducer from "./reducers/reducer";

export default function App() {

  let [{a, b, c}, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});

  return (
    <div>
      <h3>{a}</h3>
      <button onClick={() =>{dispatch({obj:1, action: '+'})}}>+</button>
      <button onClick={() =>{dispatch({obj:1, action: '-'})}}>-</button>

      <h3>{b}</h3>
      <button onClick={() =>{dispatch({obj:2, action: '+'})}}>+</button>
      <button onClick={() =>{dispatch({obj:2, action: '-'})}}>-</button>

      <h3>{c}</h3>
      <button onClick={() =>{dispatch({obj:3, action: +10})}}>+</button>
      <button onClick={() =>{dispatch({obj:3, action: -4})}}>-</button>

    </div>
  );
}
