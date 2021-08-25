import Cars from "./Cars";
import Car from "./Car";
import {useEffect, useState} from "react";
import {getCars} from "../services/car.api.service";

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
            <input type="text" name={'model'}/>
            <input type="text" name={'price'}/>
            <input type="number" name={'year'}/>

            <input type="submit" value={'Update'}/>
        </form>
    </div>
  );
}