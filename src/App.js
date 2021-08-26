// стоврити об'єкт {a:0,b:0,c:0}
// Стоврити 6 кнопок.
//     по дві на кожен з параметрів об'єкту.
// одна кнопка збільшує значення , інша зменшує
// логіку реалізувати через reducer

import './App.css'
import {useReducer} from "react";
import reducer from "./reducers/reducer";

export default function App() {

    const initialState = {a:0, b:0, c:0}
  let [{a, b, c}, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>state1 - {a}</h3>
      <button onClick={() => dispatch({obj: '1', type: 'increment'})}>+</button>
      <button onClick={() => dispatch({obj: '1', type: 'decrement'})}>-</button>

      <h3>state2 - {b}</h3>
      <button onClick={() => dispatch({obj: '2', type: 'increment'})}>+</button>
      <button onClick={() => dispatch({obj: '2', type: 'decrement'})}>-</button>

      <h3>state3 - {c}</h3>
      <button onClick={() => dispatch({obj: '3', type: 'increment'})}>+</button>
      <button onClick={() => dispatch({obj: '3', type: 'decrement'})}>-</button>

    </div>
  );
}
