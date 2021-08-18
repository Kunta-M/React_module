import {useEffect, useState} from "react";
import {getCars} from "../services/cars.service";
import Car from "./Car";

export default function Cars() {

    let [car, setCar] = useState([]);

    useEffect(() =>{
        getCars().then(value => setCar([...value]));
    }, []);

  return (
    <div>
        {
            car.map(value => <Car item={value} key={value.id}/>)
        }
    </div>
  );
}