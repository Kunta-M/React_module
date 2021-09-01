import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";

let initialState = {
    todo: [],
    text: "",
}

const addTodo = (state = initialState, action) =>{
    switch (action.type){
        case "ADD_TODO":
            return {...state,  todo: state.todo.concat(action.payload)};
        case "DELETE_TODO":
            return {...state,
                todo: state.todo.filter((todo, i) => i !== action.payload)};
        case "UPDATE_TODO":
            return {...state,
                text: state.todo [action.payload]};
        default:
            return state;
    }
}

const store = createStore(addTodo);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
