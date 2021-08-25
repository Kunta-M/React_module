import {useEffect, useState} from "react";
import {getCars, deleteCarsService} from "../../services/cars.service";
import Car from "./Car";

export default function Cars({setCarForm}) {

    let [car, setCar] = useState([]);

    useEffect(() =>{
        getCars().then(value => setCar([...value]));
    }, []);

    const deleteCars = (id) => {
        deleteCarsService(id).then(value => console.log(value));
        car.splice(1, );
        setCar([...car]);
    }

    return (
    <div>
        {
            car.map(value => <Car item={value}
                                  key={value.id}
                                  deleteCars={deleteCars}
                                  setCarForm={setCarForm}
                            />)
        }
    </div>
  );
}