import {useState} from "react";
import {editCarService, saveCars} from "../../services/cars.service";
import React from "react";
import Cars from "./Cars";

export default function CarsForm() {

    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');

    const onModelInput = (e) =>{
        setModel(e.target.value)
    }

    const onPriceInput = (e) => {
        setPrice(e.target.value)
    }

    const onYearInput = (e) => {
        setYear(e.target.value)
    }

    let carForm = {
        model: model,
        price: price,
        year: year
    }
    const onSubmitForm = (e) => {
        saveCars(carForm)
    }

    let onEditCar = (id) =>{
        editCarService({model, price, year}, id)
            .then((json) => {
                console.log(json)
            });
    }

    return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text" name={'model'} value={model} onInput={onModelInput} />
        <input type="text" name={'price'} value={price} onInput={onPriceInput} />
        <input type="number" name={'year'} value={year} onInput={onYearInput} />
        <input type="submit" value={'Submit'}/>
      </form>

        <Cars onEditCar={onEditCar}/>
    </div>
  );
}