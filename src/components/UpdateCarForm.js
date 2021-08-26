import {useEffect, useState} from "react";
import {createCars, getCars, updateCars} from "../services/car.api.service";

export default function UpdateCarForm() {

    const [cars, setCars] = useState([]);
    const [chosenCar, setChosenCar] = useState({model: '', price: '', year: ''});
    console.log(chosenCar);
    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, []);

    const onSelectCar = (e) => {
        const selectCar = cars.find(car => car.id === +e.target.value)
        setChosenCar(selectCar)
    }

    const updateChosenCar = ({target: {value, name}}) => setChosenCar({...chosenCar, [name]: value})

    return (
        <div>

            <select onChange={onSelectCar}>
                {
                    cars.map(item => <option
                        value={item.id}
                        key={item.id}>
                        {item.model} - {item.price} - {item.year}
                    </option>)
                }
            </select>

            <form className={'update-form'}>
                <input type="text" name={'model'} onChange={updateChosenCar} value={chosenCar.model}/>
                <input type="text" name={'price'} onChange={updateChosenCar} value={chosenCar.price}/>
                <input type="number" name={'year'} onChange={updateChosenCar} value={chosenCar.year}/>

                <input type="submit" value={'Update'}/>
            </form>
        </div>
    );
}