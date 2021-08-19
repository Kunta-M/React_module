import {useEffect, useState} from "react";
import {getCars, deleteCarsService} from "../../services/cars.service";
import Car from "./Car";

export default function Cars() {

    let [car, setCar] = useState([]);

    useEffect(() =>{
        getCars().then(value => {setCar([...value])});
    }, []);

    const deleteCars = (id) =>{
        deleteCarsService(id).then(value => console.log(value));
            let filterCars = car.filter(value => value.id !== id);
            setCar([...filterCars])
    }

    return (
    <div>
        {
            car.map(value => <Car item={value}
                                  key={value.id}
                                  deleteCars={deleteCars}
                            />)
        }
    </div>
  );
}