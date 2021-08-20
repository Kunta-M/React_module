import {createRef, useState} from "react";
import {editCar, saveCars} from "../../services/cars.service";
import React from "react";
import Car from "./Car";

export default function CarsForm() {

    let [carForm, setCarForm] = useState({model:'', price:'', year:''});

    const formChange = (e) =>{
      setCarForm({...carForm, [e.target.name]: e.target.value});
        console.log(carForm)
    }
    
    const onSubmitForm = (e) => {
      e.preventDefault();
      saveCars(carForm);
    }

    let props = carForm;

    return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text" name={'model'} value={carForm.model} onChange={formChange} />
        <input type="text" name={'price'} value={carForm.price} onChange={formChange} />
        <input type="number" name={'year'} value={carForm.year} onChange={formChange} />
        <input type="submit" value={'submit'}/>
        <input type="submit" value={'submit chosen car'}/>
      </form>
    </div>
  );
}