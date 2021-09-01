// Створити todo використовуючи Redux.
// Має бути контрольована форма з полями: title, description(по бажанню також можете зробити через Redux).
//
// Що має робити наша todo?
// 1. Додавати саме todo
// 2. Видаляти todo
// 3. Редагувати todo

import './App.css'
import {useDispatch, useSelector} from "react-redux";

export default function App() {

    let state = useSelector(state => state);
    let dispatch = useDispatch();
    state = {text: ""}

    let onSubmit = (e) =>{
        e.preventDefault();

    }

    return (
        <div>
            <h2>Todos list</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name={'title'}/>
                <input type="textarea"/>
                <button>Save</button>
                <hr/>
                <button>Delete all</button>
            </form>

        </div>
    );
}
