// є об'єкт, значення якого 0
// Стоврити 2 кнопки.
// Перша збільшує   значення на 10
// Друга зменшує на 2.
//
// Зміну стану та виведення реалізувати через redcer

import './App.css'
import {useReducer} from "react";
import reducer from "./reducers/reducer";

export default function App() {

    let [{value}, dispatch] = useReducer (reducer, {value: 0});

  return (
    <div>
        <h3>state 1 - {value}</h3>
        <button onClick={() => dispatch({obj: '1', action: '+'})}>add 10</button>
        <button onClick={() => dispatch({obj: '1', action: '-'})}>minus 2</button>
    </div>
  );
}
