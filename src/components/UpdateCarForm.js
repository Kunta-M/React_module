import Cars from "./Cars";
import Car from "./Car";
import {useEffect, useState} from "react";
import {createCars, getCars, updateCars} from "../services/car.api.service";

export default function UpdateCarForm() {

    const [cars, setCars] = useState([]);
    const [chosenCar, setChosenCar] = useState({model:'', price:'', year:''});

    useEffect(() =>{
        getCars().then(value => setCars([...value]))
    }, [cars]);

    const onSelectCar = (e) =>{
        const selectCar = cars.find(car => car.id === e.target.value)
        setChosenCar(selectCar)
    }

    const updateChosenCar = () =>{
        chosenCar.id
        ? updateCars(chosenCar)
        : createCars(chosenCar)
    }

  return (
    <div>
        <form action="">
            <select onSubmit={onSelectCar}>
                {
                    cars.map(item => <option
                                            value={item.id}
                                            key={item.id}>
                                            {item.model} - {item.price} - {item.year}
                                     </option>)
                }
            </select>
        </form>

        <form className={'update-form'}>
            <input type="text" name={'model'} onChange={updateChosenCar}/>
            <input type="text" name={'price'} onChange={updateChosenCar}/>
            <input type="number" name={'year'} onChange={updateChosenCar}/>

            <input type="submit" value={'Update'}/>
        </form>
    </div>
  );
}