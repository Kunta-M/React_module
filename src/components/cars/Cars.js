import {useEffect, useState} from "react";
import {getCars, deleteCarsService, editCar} from "../../services/cars.service";
import Car from "./Car";

export default function Cars(carForm) {

    let [car, setCar] = useState([]);

    useEffect(() =>{
        getCars().then(value => {setCar([...value])});
    }, []);

    const deleteCars = (id) =>{
        deleteCarsService(id).then(value => console.log(value));
            car.splice(1, 1);
            setCar([...car])
    }

    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');

    const data = {model: model,
                  price: price,
                  year: year}

    let addCar = (id) =>{

    }

    return (
    <div>
        {
            car.map(value => <Car item={value}
                                  key={value.id}
                                  deleteCars={deleteCars}
                                  addCar={addCar}
                            />)
        }
    </div>
  );
}