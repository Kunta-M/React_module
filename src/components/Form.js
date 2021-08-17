import {useState} from "react";
import {saveCar} from "../services/cars.service";

export default function Form() {

    let [carForm, setCarForm] = useState({model:'', price:'', year:''});

    const onFormChange = (e) => {
        setCarForm({...carForm, [e.target.name]: e.target.value});
        console.log(carForm)
        }

    const onSubmitForm = (e) =>{
        e.preventDefault();
            if (carForm.year < 1990 || carForm.year > 2021){
                alert('The year should be from 1990 to 2021(included)');
            } else saveCar(carForm);
    }

    return (
    <div>
        <form onSubmit= {onSubmitForm}>
            <input type="text" name={'model'} value={carForm.model} onChange={onFormChange}/>
            <input type="number" name={'price'} value={carForm.price} onChange={onFormChange}/>
            <input type="number" name={'year'} value={carForm.year} onChange={onFormChange}/>
            <input type="submit" value={'save'} />
        </form>
    </div>
  );
}