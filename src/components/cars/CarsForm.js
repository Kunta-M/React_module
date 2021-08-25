import {useState} from "react";
import {editCarService, saveCars} from "../../services/cars.service";
import React from "react";
import Cars from "./Cars";

export default function CarsForm() {

    let [carForm, setCarForm] = useState({model:'', price: '', year: ''})
    let onFormChange = (e) =>{
        setCarForm({...carForm, [e.target.name]: e.target.value})
    }

    const onSubmitForm = () => {
        carForm.id
        ?editCarService(carForm)
        :saveCars(carForm)
    }

    return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text" name={'model'} value={carForm.model} onChange={onFormChange} />
        <input type="text" name={'price'} value={carForm.price} onChange={onFormChange} />
        <input type="number" name={'year'} value={carForm.year} onChange={onFormChange} />
        <input type="submit" value={'Submit'}/>
      </form>

        <Cars setCarForm={setCarForm}/>
    </div>
  );
}